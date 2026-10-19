import Foundation
import Darwin

public struct ApiResponse: Codable {
    public let success: Bool?
    public let slug: String?
    public let message: String?
    public let error: String?

    public init(success: Bool? = nil, slug: String? = nil, message: String? = nil, error: String? = nil) {
        self.success = success
        self.slug = slug
        self.message = message
        self.error = error
    }
}

public final class HTTPServer {
    public let port: UInt16
    public let baseDir: URL
    private var isRunning = false
    private var serverSocket: Int32 = -1
    private let generator: SiteGenerator

    public init(port: UInt16 = 8080, baseDir: URL) {
        self.port = port
        self.baseDir = baseDir
        self.generator = SiteGenerator(baseDir: baseDir)
    }

    public func start() {
        serverSocket = socket(AF_INET, SOCK_STREAM, 0)
        guard serverSocket >= 0 else {
            print("Error: No se pudo crear el socket de red.")
            return
        }

        var yes: Int32 = 1
        setsockopt(serverSocket, SOL_SOCKET, SO_REUSEADDR, &yes, socklen_t(MemoryLayout<Int32>.size))

        var addr = sockaddr_in()
        addr.sin_family = sa_family_t(AF_INET)
        addr.sin_port = in_port_t(port.bigEndian)
        addr.sin_addr.s_addr = in_addr_t(0) // 0.0.0.0

        let bindResult = withUnsafePointer(to: &addr) {
            $0.withMemoryRebound(to: sockaddr.self, capacity: 1) {
                Darwin.bind(serverSocket, $0, socklen_t(MemoryLayout<sockaddr_in>.size))
            }
        }

        guard bindResult == 0 else {
            print("Error: No se pudo enlazar al puerto \(port). ¿Está ocupado?")
            close(serverSocket)
            return
        }

        guard listen(serverSocket, 64) == 0 else {
            print("Error: No se pudo iniciar la escucha en el puerto \(port).")
            close(serverSocket)
            return
        }

        isRunning = true
        print("─────────────────────────────────────────────────────────────")
        print("✦ EDITOR CMS — Servidor Swift Activo")
        print("  • Blog / Revista:   http://localhost:\(port)/")
        print("  • Panel Editorial:  http://localhost:\(port)/admin")
        print("─────────────────────────────────────────────────────────────")

        while isRunning {
            var clientAddr = sockaddr_in()
            var clientAddrLen = socklen_t(MemoryLayout<sockaddr_in>.size)
            let clientSocket = withUnsafeMutablePointer(to: &clientAddr) {
                $0.withMemoryRebound(to: sockaddr.self, capacity: 1) {
                    accept(serverSocket, $0, &clientAddrLen)
                }
            }

            guard clientSocket >= 0 else { continue }

            DispatchQueue.global(qos: .userInitiated).async { [weak self] in
                self?.handleClient(clientSocket: clientSocket)
            }
        }
    }

    public func stop() {
        isRunning = false
        if serverSocket >= 0 {
            close(serverSocket)
            serverSocket = -1
        }
    }

    private func handleClient(clientSocket: Int32) {
        defer { close(clientSocket) }

        var buffer = [UInt8](repeating: 0, count: 8192)
        let bytesRead = read(clientSocket, &buffer, buffer.count)
        guard bytesRead > 0 else { return }

        let initialData = Data(buffer[0..<bytesRead])
        guard let requestString = String(data: initialData, encoding: .utf8) ?? String(data: initialData, encoding: .isoLatin1) else { return }

        let requestLines = requestString.components(separatedBy: "\r\n")
        guard let firstLine = requestLines.first else { return }
        let parts = firstLine.components(separatedBy: " ")
        guard parts.count >= 2 else { return }

        let method = parts[0].uppercased()
        let fullPath = parts[1]

        // Parse query string
        var path = fullPath
        var queryParams: [String: String] = [:]
        if let queryIndex = fullPath.firstIndex(of: "?") {
            path = String(fullPath[..<queryIndex])
            let queryString = String(fullPath[fullPath.index(after: queryIndex)...])
            for pair in queryString.components(separatedBy: "&") {
                let kv = pair.components(separatedBy: "=")
                if kv.count == 2 {
                    let key = kv[0].removingPercentEncoding ?? kv[0]
                    let val = kv[1].removingPercentEncoding ?? kv[1]
                    queryParams[key] = val
                }
            }
        }

        // Parse Content-Length for POST/PUT
        var contentLength = 0
        for line in requestLines {
            let lower = line.lowercased()
            if lower.hasPrefix("content-length:") {
                let valStr = line.components(separatedBy: ":").last?.trimmingCharacters(in: .whitespaces) ?? "0"
                contentLength = Int(valStr) ?? 0
            }
        }

        // Extract body
        var bodyData = Data()
        if let headerEndRange = requestString.range(of: "\r\n\r\n") {
            let headerBytesCount = requestString[..<headerEndRange.upperBound].utf8.count
            if bytesRead > headerBytesCount {
                bodyData.append(contentsOf: buffer[headerBytesCount..<bytesRead])
            }
        }

        // Read remaining body if Content-Length is larger than initial chunk
        while bodyData.count < contentLength {
            var tempBuf = [UInt8](repeating: 0, count: 8192)
            let n = read(clientSocket, &tempBuf, tempBuf.count)
            if n <= 0 { break }
            bodyData.append(contentsOf: tempBuf[0..<n])
        }

        // Route Request
        route(method: method, path: path, queryParams: queryParams, body: bodyData, clientSocket: clientSocket)
    }

    private func route(method: String, path: String, queryParams: [String: String], body: Data, clientSocket: Int32) {
        // Handle CORS Preflight
        if method == "OPTIONS" {
            var header = "HTTP/1.1 204 No Content\r\n"
            header += "Access-Control-Allow-Origin: *\r\n"
            header += "Access-Control-Allow-Methods: GET, POST, DELETE, PUT, OPTIONS\r\n"
            header += "Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With\r\n"
            header += "Access-Control-Max-Age: 86400\r\n"
            header += "Content-Length: 0\r\n"
            header += "Connection: close\r\n\r\n"
            if let d = header.data(using: .utf8) {
                d.withUnsafeBytes { ptr in
                    _ = Darwin.send(clientSocket, ptr.baseAddress, d.count, 0)
                }
            }
            return
        }

        // 1. Admin Dashboard Route
        if path == "/admin" || path == "/admin/" {
            let adminHTML = AdminDashboard.renderHTML()
            sendResponse(clientSocket: clientSocket, status: "200 OK", contentType: "text/html; charset=utf-8", data: adminHTML.data(using: .utf8)!)
            return
        }

        // 2. API Routes
        if path.hasPrefix("/api/") {
            handleAPI(method: method, path: path, queryParams: queryParams, body: body, clientSocket: clientSocket)
            return
        }

        // 3. Static Files
        serveStaticFile(path: path, clientSocket: clientSocket)
    }

    private func handleAPI(method: String, path: String, queryParams: [String: String], body: Data, clientSocket: Int32) {
        if path == "/api/posts" {
            switch method {
            case "GET":
                if let slug = queryParams["slug"] {
                    // Single post with raw markdown
                    let file = baseDir.appendingPathComponent("content/posts/\(slug).md")
                    if let post = Post.fromMarkdownFile(at: file) {
                        sendJSON(clientSocket: clientSocket, object: post)
                    } else {
                        sendJSON(clientSocket: clientSocket, status: "404 Not Found", object: ["error": "Artículo no encontrado"])
                    }
                } else {
                    // All posts summary
                    let posts = generator.loadAllPosts()
                    sendJSON(clientSocket: clientSocket, object: posts)
                }
                return

            case "POST":
                // Create or update post
                do {
                    struct PostPayload: Codable {
                        let slug: String
                        let title: String
                        let category: String?
                        let format: String?
                        let coverImage: String?
                        let imageCaption: String?
                        let date: String?
                        let excerpt: String?
                        let content: String?
                        let isPublished: Bool?
                    }
                    let payload = try JSONDecoder().decode(PostPayload.self, from: body)
                    let cleanSlug = payload.slug.trimmingCharacters(in: .whitespaces).lowercased()
                    let file = baseDir.appendingPathComponent("content/posts/\(cleanSlug).md")

                    let post = Post(
                        slug: cleanSlug,
                        title: payload.title,
                        category: payload.category ?? "Ensayo",
                        date: payload.date ?? "",
                        format: PostFormat(rawValue: payload.format ?? "standard") ?? .standard,
                        coverImage: payload.coverImage ?? "",
                        imageCaption: payload.imageCaption ?? "",
                        excerpt: payload.excerpt ?? "",
                        content: payload.content ?? "",
                        isPublished: payload.isPublished ?? true
                    )

                    let md = post.toMarkdownString()
                    try md.write(to: file, atomically: true, encoding: .utf8)

                    // Rebuild site automatically
                    generator.build()

                    sendJSON(clientSocket: clientSocket, object: ApiResponse(success: true, slug: cleanSlug, message: nil, error: nil))
                } catch {
                    sendJSON(clientSocket: clientSocket, status: "400 Bad Request", object: ApiResponse(success: false, slug: nil, message: nil, error: "JSON inválido: \(error.localizedDescription)"))
                }
                return

            case "DELETE":
                var slug = queryParams["slug"]
                if slug == nil || slug?.isEmpty == true {
                    struct DeletePayload: Codable { let slug: String }
                    if let payload = try? JSONDecoder().decode(DeletePayload.self, from: body) {
                        slug = payload.slug
                    }
                }
                guard let validSlug = slug, !validSlug.isEmpty else {
                    sendJSON(clientSocket: clientSocket, status: "400 Bad Request", object: ApiResponse(success: false, slug: nil, message: nil, error: "Falta parámetro 'slug'"))
                    return
                }
                handleDelete(rawSlug: validSlug, clientSocket: clientSocket)
                return

            default:
                sendResponse(clientSocket: clientSocket, status: "405 Method Not Allowed", contentType: "text/plain", data: "Método no permitido".data(using: .utf8)!)
                return
            }
        }

        // Dedicated deletion endpoint supporting POST / DELETE / GET
        if path == "/api/posts/delete" {
            var slug = queryParams["slug"]
            if slug == nil || slug?.isEmpty == true {
                struct DeletePayload: Codable { let slug: String }
                if let payload = try? JSONDecoder().decode(DeletePayload.self, from: body) {
                    slug = payload.slug
                }
            }
            guard let validSlug = slug, !validSlug.isEmpty else {
                sendJSON(clientSocket: clientSocket, status: "400 Bad Request", object: ApiResponse(success: false, slug: nil, message: nil, error: "Falta parámetro 'slug'"))
                return
            }
            handleDelete(rawSlug: validSlug, clientSocket: clientSocket)
            return
        }

        if path == "/api/build" && method == "POST" {
            generator.build()
            sendJSON(clientSocket: clientSocket, object: ApiResponse(success: true, slug: nil, message: "Sitio reconstruido exitosamente", error: nil))
            return
        }

        sendJSON(clientSocket: clientSocket, status: "404 Not Found", object: ApiResponse(success: false, slug: nil, message: nil, error: "Ruta de API no encontrada"))
    }

    private func handleDelete(rawSlug: String, clientSocket: Int32) {
        var cleanSlug = rawSlug.trimmingCharacters(in: .whitespacesAndNewlines)
        if cleanSlug.hasSuffix(".md") {
            cleanSlug = String(cleanSlug.dropLast(3))
        }

        let fm = FileManager.default
        let mdFile = baseDir.appendingPathComponent("content/posts/\(cleanSlug).md")
        let htmlFile = baseDir.appendingPathComponent("posts/\(cleanSlug).html")

        var deleted = false
        if fm.fileExists(atPath: mdFile.path) {
            do {
                try fm.removeItem(atPath: mdFile.path)
                deleted = true
                print("✓ Archivo Markdown eliminado: \(mdFile.path)")
            } catch {
                print("Error al eliminar archivo: \(error)")
            }
        }

        if fm.fileExists(atPath: htmlFile.path) {
            try? fm.removeItem(atPath: htmlFile.path)
        }

        // Rebuild site so index.html, post.html, and search index reflect deletion immediately
        generator.build()

        sendJSON(clientSocket: clientSocket, object: ApiResponse(
            success: true,
            slug: cleanSlug,
            message: deleted ? "Artículo '\(cleanSlug)' eliminado con éxito" : "Artículo procesado (no existía en disco)",
            error: nil
        ))
    }

    private func serveStaticFile(path: String, clientSocket: Int32) {
        var filePath = path
        if filePath == "/" || filePath.isEmpty {
            filePath = "/index.html"
        }

        // Clean path to prevent path traversal
        let cleanPath = filePath.replacingOccurrences(of: "..", with: "")
        let targetURL = baseDir.appendingPathComponent(cleanPath)

        var isDir: ObjCBool = false
        if FileManager.default.fileExists(atPath: targetURL.path, isDirectory: &isDir) {
            if isDir.boolValue {
                let indexInDir = targetURL.appendingPathComponent("index.html")
                if FileManager.default.fileExists(atPath: indexInDir.path) {
                    if let data = try? Data(contentsOf: indexInDir) {
                        sendResponse(clientSocket: clientSocket, status: "200 OK", contentType: "text/html; charset=utf-8", data: data)
                        return
                    }
                }
            } else {
                if let data = try? Data(contentsOf: targetURL) {
                    let ext = targetURL.pathExtension.lowercased()
                    let mime = mimeType(for: ext)
                    sendResponse(clientSocket: clientSocket, status: "200 OK", contentType: mime, data: data)
                    return
                }
            }
        }

        // 404
        let notFoundHTML = "<h1>404 &mdash; No Encontrado</h1><p>El recurso solicitado no existe en este servidor.</p>"
        sendResponse(clientSocket: clientSocket, status: "404 Not Found", contentType: "text/html; charset=utf-8", data: notFoundHTML.data(using: .utf8)!)
    }

    private func sendJSON<T: Encodable>(clientSocket: Int32, status: String = "200 OK", object: T) {
        let encoder = JSONEncoder()
        encoder.outputFormatting = [.prettyPrinted]
        guard let data = try? encoder.encode(object) else {
            sendResponse(clientSocket: clientSocket, status: "500 Internal Error", contentType: "text/plain", data: "Error serializando JSON".data(using: .utf8)!)
            return
        }
        sendResponse(clientSocket: clientSocket, status: status, contentType: "application/json; charset=utf-8", data: data)
    }

    private func sendResponse(clientSocket: Int32, status: String, contentType: String, data: Data) {
        var header = "HTTP/1.1 \(status)\r\n"
        header += "Content-Type: \(contentType)\r\n"
        header += "Content-Length: \(data.count)\r\n"
        header += "Connection: close\r\n"
        header += "Access-Control-Allow-Origin: *\r\n"
        header += "Access-Control-Allow-Methods: GET, POST, DELETE, PUT, OPTIONS\r\n"
        header += "Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With\r\n"
        header += "Server: EditorCMS-Swift/1.0\r\n\r\n"

        guard let headerData = header.data(using: .utf8) else { return }

        var fullResponse = headerData
        fullResponse.append(data)

        fullResponse.withUnsafeBytes { ptr in
            _ = Darwin.send(clientSocket, ptr.baseAddress, fullResponse.count, 0)
        }
    }

    private func mimeType(for ext: String) -> String {
        switch ext {
        case "html", "htm": return "text/html; charset=utf-8"
        case "css": return "text/css; charset=utf-8"
        case "js": return "application/javascript; charset=utf-8"
        case "json": return "application/json; charset=utf-8"
        case "png": return "image/png"
        case "jpg", "jpeg": return "image/jpeg"
        case "svg": return "image/svg+xml"
        case "gif": return "image/gif"
        case "webp": return "image/webp"
        case "ico": return "image/x-icon"
        case "txt", "md": return "text/plain; charset=utf-8"
        default: return "application/octet-stream"
        }
    }
}
