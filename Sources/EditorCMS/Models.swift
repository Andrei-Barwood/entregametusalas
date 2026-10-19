import Foundation

public enum PostFormat: String, Codable {
    case standard
    case quote
    case gallery
    case audio
}

public struct Post: Codable {
    public var id: String // slug
    public var slug: String
    public var title: String
    public var category: String
    public var date: String
    public var readTime: String
    public var format: PostFormat
    public var coverImage: String
    public var imageCaption: String
    public var quoteText: String
    public var quoteAuthor: String
    public var quoteContext: String
    public var audioTrack: String
    public var audioDuration: String
    public var galleryImages: [String]
    public var excerpt: String
    public var content: String // Markdown body
    public var authorName: String
    public var authorRole: String
    public var authorAvatar: String
    public var authorBio: String
    public var isPublished: Bool

    public init(
        slug: String,
        title: String,
        category: String = "Ensayo",
        date: String = "",
        readTime: String = "",
        format: PostFormat = .standard,
        coverImage: String = "",
        imageCaption: String = "",
        quoteText: String = "",
        quoteAuthor: String = "",
        quoteContext: String = "",
        audioTrack: String = "",
        audioDuration: String = "10 min",
        galleryImages: [String] = [],
        excerpt: String = "",
        content: String = "",
        authorName: String = "andreii",
        authorRole: String = "Editor",
        authorAvatar: String = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        authorBio: String = "i'll guess you're seeing me in another life hun",
        isPublished: Bool = true
    ) {
        self.id = slug
        self.slug = slug
        self.title = title
        self.category = category
        self.date = date.isEmpty ? Post.currentFormattedDate() : date
        self.readTime = readTime
        self.format = format
        self.coverImage = coverImage
        self.imageCaption = imageCaption
        self.quoteText = quoteText
        self.quoteAuthor = quoteAuthor
        self.quoteContext = quoteContext
        self.audioTrack = audioTrack
        self.audioDuration = audioDuration
        self.galleryImages = galleryImages
        self.excerpt = excerpt
        self.content = content
        self.authorName = authorName
        self.authorRole = authorRole
        self.authorAvatar = authorAvatar
        self.authorBio = authorBio
        self.isPublished = isPublished
    }

    public static func currentFormattedDate() -> String {
        let formatter = DateFormatter()
        formatter.locale = Locale(identifier: "es_ES")
        formatter.dateFormat = "dd MMMM, yyyy"
        return formatter.string(from: Date()).capitalized
    }

    public func calculatedReadingTime() -> String {
        if !readTime.isEmpty { return readTime }
        let words = (excerpt + " " + content)
            .components(separatedBy: .whitespacesAndNewlines)
            .filter { !$0.isEmpty }.count
        let minutes = max(1, Int(ceil(Double(words) / 200.0)))
        return "\(minutes) min de lectura"
    }

    public func toMarkdownString() -> String {
        var fm = "---\n"
        fm += "title: \(escapeYAML(title))\n"
        fm += "slug: \(slug)\n"
        fm += "category: \(escapeYAML(category))\n"
        fm += "date: \(escapeYAML(date))\n"
        fm += "format: \(format.rawValue)\n"
        fm += "coverImage: \(escapeYAML(coverImage))\n"
        fm += "imageCaption: \(escapeYAML(imageCaption))\n"
        fm += "quoteText: \(escapeYAML(quoteText))\n"
        fm += "quoteAuthor: \(escapeYAML(quoteAuthor))\n"
        fm += "quoteContext: \(escapeYAML(quoteContext))\n"
        fm += "audioTrack: \(escapeYAML(audioTrack))\n"
        fm += "audioDuration: \(escapeYAML(audioDuration))\n"
        fm += "galleryImages: \(galleryImages.joined(separator: ", "))\n"
        fm += "excerpt: \(escapeYAML(excerpt))\n"
        fm += "authorName: \(escapeYAML(authorName))\n"
        fm += "authorRole: \(escapeYAML(authorRole))\n"
        fm += "authorAvatar: \(escapeYAML(authorAvatar))\n"
        fm += "authorBio: \(escapeYAML(authorBio))\n"
        fm += "isPublished: \(isPublished)\n"
        fm += "---\n\n"
        fm += content
        return fm
    }

    private func escapeYAML(_ str: String) -> String {
        if str.contains(":") || str.contains("\n") || str.contains("\"") {
            let escaped = str.replacingOccurrences(of: "\"", with: "\\\"")
            return "\"\(escaped)\""
        }
        return str
    }

    public static func fromMarkdownFile(at url: URL) -> Post? {
        guard let rawText = try? String(contentsOf: url, encoding: .utf8) else {
            return nil
        }
        let slug = url.deletingPathExtension().lastPathComponent
        return parse(markdown: rawText, defaultSlug: slug)
    }

    public static func parse(markdown: String, defaultSlug: String) -> Post {
        let lines = markdown.components(separatedBy: .newlines)
        var metadata: [String: String] = [:]
        var bodyLines: [String] = []
        var inFrontmatter = false
        var frontmatterEncountered = false

        for (index, line) in lines.enumerated() {
            let trimmed = line.trimmingCharacters(in: .whitespaces)
            if index == 0 && trimmed == "---" {
                inFrontmatter = true
                frontmatterEncountered = true
                continue
            }
            if inFrontmatter && trimmed == "---" {
                inFrontmatter = false
                continue
            }
            if inFrontmatter {
                if let colonIndex = line.firstIndex(of: ":") {
                    let key = String(line[..<colonIndex]).trimmingCharacters(in: .whitespaces)
                    var val = String(line[line.index(after: colonIndex)...]).trimmingCharacters(in: .whitespaces)
                    if (val.hasPrefix("\"") && val.hasSuffix("\"")) || (val.hasPrefix("'") && val.hasSuffix("'")) {
                        val.removeFirst()
                        val.removeLast()
                    }
                    metadata[key] = val
                }
            } else {
                bodyLines.append(line)
            }
        }

        let body = frontmatterEncountered ? bodyLines.joined(separator: "\n").trimmingCharacters(in: .whitespacesAndNewlines) : markdown
        let formatStr = metadata["format"] ?? "standard"
        let format = PostFormat(rawValue: formatStr) ?? .standard
        let slug = metadata["slug"] ?? defaultSlug
        let title = metadata["title"] ?? (defaultSlug.replacingOccurrences(of: "-", with: " ").capitalized)
        let galleryImagesStr = metadata["galleryImages"] ?? ""
        let galleryImages = galleryImagesStr.isEmpty ? [] : galleryImagesStr.components(separatedBy: ",").map { $0.trimmingCharacters(in: .whitespaces) }.filter { !$0.isEmpty }

        return Post(
            slug: slug,
            title: title,
            category: metadata["category"] ?? "Ensayo",
            date: metadata["date"] ?? currentFormattedDate(),
            readTime: metadata["readTime"] ?? "",
            format: format,
            coverImage: metadata["coverImage"] ?? "",
            imageCaption: metadata["imageCaption"] ?? "",
            quoteText: metadata["quoteText"] ?? "",
            quoteAuthor: metadata["quoteAuthor"] ?? "",
            quoteContext: metadata["quoteContext"] ?? "",
            audioTrack: metadata["audioTrack"] ?? "",
            audioDuration: metadata["audioDuration"] ?? "12 min",
            galleryImages: galleryImages,
            excerpt: metadata["excerpt"] ?? "",
            content: body,
            authorName: metadata["authorName"] ?? "andreii",
            authorRole: metadata["authorRole"] ?? "Editor",
            authorAvatar: metadata["authorAvatar"] ?? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
            authorBio: metadata["authorBio"] ?? "i'll guess you're seeing me in another life hun",
            isPublished: (metadata["isPublished"] ?? "true").lowercased() != "false"
        )
    }
}

public struct PrincipleItem: Codable {
    public var number: String
    public var title: String
    public var description: String

    public init(number: String, title: String, description: String) {
        self.number = number
        self.title = title
        self.description = description
    }
}

public struct SiteSettings: Codable {
    public var siteTitle: String
    public var siteTagline: String
    public var siteDescription: String
    public var authorName: String
    public var authorRole: String
    public var authorAvatar: String
    public var authorBio: String
    public var authorQuote: String
    public var aboutTagline: String
    public var aboutTitle: String
    public var aboutLead: String
    public var contactIntro: String
    public var principles: [PrincipleItem]
    public var newsletterTitle: String
    public var newsletterText: String
    public var newsletterButton: String
    public var footerCopyright: String

    public init(
        siteTitle: String = "EDITOR",
        siteTagline: String = "Diario de diseño reflexivo, arquitectura y cultura pausada",
        siteDescription: String = "Un diario y revista editorial minimalista sobre arquitectura reflexiva, diseño sobrio, literatura y el valor del silencio en la era contemporánea.",
        authorName: String = "andreii",
        authorRole: String = "Editor",
        authorAvatar: String = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        authorBio: String = "i'll guess you're seeing me in another life hun",
        authorQuote: String = "i'll guess you're seeing me in another life hun",
        aboutTagline: String = "Perfil",
        aboutTitle: String = "andreii",
        aboutLead: String = "i'll guess you're seeing me in another life hun",
        contactIntro: String = "Recibo con gratitud reflexiones de lectores o propuestas de colaboración.",
        principles: [PrincipleItem] = [
            PrincipleItem(number: "01", title: "Silencio visual", description: "El espacio en blanco no es un vacío que espera relleno, sino el marco que confiere dignidad a cada idea."),
            PrincipleItem(number: "02", title: "Tipografía como voz", description: "La cadencia de las fuentes serif clásicas conecta el ojo del lector con la respiración natural del texto."),
            PrincipleItem(number: "03", title: "Fricción analógica", description: "Reivindicamos los procesos lentos: el papel de grano fino, las cámaras mecánicas y los borradores manuscritos."),
            PrincipleItem(number: "04", title: "Permanencia", description: "Escribimos sobre conceptos que conservarán su vigencia dentro de una década, no en el próximo ciclo de noticias.")
        ],
        newsletterTitle: String = "El correo de los domingos",
        newsletterText: String = "Un único ensayo breve cada domingo por la mañana. Sin publicidad, sin algoritmos ni urgencias innecesarias.",
        newsletterButton: String = "Suscribirme",
        footerCopyright: String = "© 2026 EDITOR. Publicación independiente dedicada a la estética editorial y la contemplación serena."
    ) {
        self.siteTitle = siteTitle
        self.siteTagline = siteTagline
        self.siteDescription = siteDescription
        self.authorName = authorName
        self.authorRole = authorRole
        self.authorAvatar = authorAvatar
        self.authorBio = authorBio
        self.authorQuote = authorQuote
        self.aboutTagline = aboutTagline
        self.aboutTitle = aboutTitle
        self.aboutLead = aboutLead
        self.contactIntro = contactIntro
        self.principles = principles
        self.newsletterTitle = newsletterTitle
        self.newsletterText = newsletterText
        self.newsletterButton = newsletterButton
        self.footerCopyright = footerCopyright
    }

    public static func `default`() -> SiteSettings {
        return SiteSettings()
    }

    public static func load(from url: URL) -> SiteSettings {
        guard let data = try? Data(contentsOf: url),
              let decoded = try? JSONDecoder().decode(SiteSettings.self, from: data) else {
            return .default()
        }
        return decoded
    }

    public func save(to url: URL) {
        let encoder = JSONEncoder()
        encoder.outputFormatting = [.prettyPrinted, .sortedKeys]
        if let data = try? encoder.encode(self) {
            try? data.write(to: url, options: .atomic)
        }
    }
}
