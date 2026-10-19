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
