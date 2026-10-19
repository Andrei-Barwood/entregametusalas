import Foundation

let currentDir = URL(fileURLWithPath: FileManager.default.currentDirectoryPath)
let generator = SiteGenerator(baseDir: currentDir)

let args = CommandLine.arguments

func printUsage() {
    print("""
    ─────────────────────────────────────────────────────────────
    EDITOR CMS &mdash; Gestor de Contenidos en Swift para Blog Editorial
    ─────────────────────────────────────────────────────────────

    USO:
      swift run cms serve [--port <puerto>]   Inicia el servidor local y el panel editorial
      swift run cms build                     Compila todos los posts Markdown a HTML
      swift run cms new "<título>"            Crea una nueva plantilla Markdown en content/posts/
      swift run cms delete "<slug>"           Elimina un artículo y recompila el sitio
      swift run cms list                      Muestra todos los artículos y su estado
      swift run cms help                      Muestra este mensaje de ayuda

    EJEMPLOS:
      swift run cms serve
      swift run cms new "El valor de la lentitud"
      swift run cms delete "el-valor-de-la-lentitud"
    ─────────────────────────────────────────────────────────────
    """)
}

guard args.count > 1 else {
    // If no argument, run serve by default on port 8080
    generator.build()
    let server = HTTPServer(port: 8080, baseDir: currentDir)
    server.start()
    exit(0)
}

let command = args[1].lowercased()

switch command {
case "serve":
    var port: UInt16 = 8080
    if args.count >= 4 && args[2] == "--port", let p = UInt16(args[3]) {
        port = p
    }
    generator.build()
    let server = HTTPServer(port: port, baseDir: currentDir)
    server.start()

case "build":
    print("Compilando sitio estático desde content/posts/...")
    generator.build()

case "list":
    let posts = generator.loadAllPosts()
    print("Encontrados \(posts.count) artículos en disco:")
    print("─────────────────────────────────────────────────────────────")
    for (i, p) in posts.enumerated() {
        let status = p.isPublished ? "✓ Publicado" : "• Borrador"
        print("[\(i+1)] \(p.title)")
        print("    Slug: \(p.slug) | Formato: \(p.format.rawValue) | Categoría: \(p.category)")
        print("    Fecha: \(p.date) | \(status)")
        print("")
    }

case "new":
    guard args.count > 2 else {
        print("Error: Debes proporcionar un título para el nuevo artículo.")
        print("Ejemplo: swift run cms new \"Arquitectura del silencio\"")
        exit(1)
    }
    let title = args[2]
    let slug = title
        .folding(options: .diacriticInsensitive, locale: .current)
        .lowercased()
        .trimmingCharacters(in: .whitespaces)
        .replacingOccurrences(of: "[^a-z0-9]+", with: "-", options: .regularExpression)
        .trimmingCharacters(in: CharacterSet(charactersIn: "-"))

    let newPost = Post(
        slug: slug,
        title: title,
        category: "Ensayo",
        date: Post.currentFormattedDate(),
        format: .standard,
        coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
        imageCaption: "Fotografía descriptiva de cabecera.",
        excerpt: "Escribe aquí un breve extracto o sinopsis de 3 o 4 líneas...",
        content: """
        Este es el primer párrafo de tu nuevo artículo. En la vista individual recibirá automáticamente una elegante letra capital (*drop cap*).

        ## I. Primer Subtítulo

        Escribe aquí tu desarrollo en Markdown puro sin preocuparte por etiquetas HTML. Puedes añadir citas elegantes:

        > «La sencillez es la máxima sofisticación.»
        > — Leonardo da Vinci

        También puedes incluir listas o código:
        - Primer concepto clave
        - Segundo concepto clave
        """,
        isPublished: true
    )

    let contentDir = currentDir.appendingPathComponent("content/posts")
    try? FileManager.default.createDirectory(at: contentDir, withIntermediateDirectories: true)
    let filePath = contentDir.appendingPathComponent("\(slug).md")

    if FileManager.default.fileExists(atPath: filePath.path) {
        print("Aviso: El archivo ya existe en: \(filePath.path)")
    } else {
        let md = newPost.toMarkdownString()
        try? md.write(to: filePath, atomically: true, encoding: .utf8)
        print("✓ Nuevo artículo creado:")
        print("  Ruta: content/posts/\(slug).md")
        print("  Puedes editarlo con cualquier editor Markdown o abrir el CMS en http://localhost:8080/admin")
        generator.build()
    }

case "delete", "rm":
    guard args.count > 2 else {
        print("Error: Debes especificar el slug del artículo a eliminar.")
        print("Ejemplo: swift run cms delete \"la-belleza-de-lo-efimero\"")
        exit(1)
    }
    let rawSlug = args[2].trimmingCharacters(in: .whitespaces)
    let slug = rawSlug.hasSuffix(".md") ? String(rawSlug.dropLast(3)) : rawSlug

    let contentDir = currentDir.appendingPathComponent("content/posts")
    let filePath = contentDir.appendingPathComponent("\(slug).md")
    let htmlFile = currentDir.appendingPathComponent("posts/\(slug).html")

    var removed = false
    if FileManager.default.fileExists(atPath: filePath.path) {
        try? FileManager.default.removeItem(atPath: filePath.path)
        removed = true
    }
    if FileManager.default.fileExists(atPath: htmlFile.path) {
        try? FileManager.default.removeItem(atPath: htmlFile.path)
    }

    generator.build()

    if removed {
        print("✓ Artículo '\(slug)' eliminado con éxito.")
    } else {
        print("Aviso: No se encontró ningún archivo para '\(slug)'. El sitio ha sido reconstruido.")
    }

case "help", "--help", "-h":
    printUsage()

default:
    print("Comando desconocido: \(command)")
    printUsage()
    exit(1)
}
