import Foundation

public struct MarkdownParser {

    public static func toHTML(_ markdown: String, enableLeadDropCap: Bool = true) -> String {
        let lines = markdown.components(separatedBy: .newlines)
        var htmlBlocks: [String] = []
        
        var inCodeBlock = false
        var codeBlockLang = ""
        var codeBlockLines: [String] = []

        var inBlockquote = false
        var blockquoteLines: [String] = []

        var inList = false
        var isOrderedList = false
        var listItems: [String] = []

        var currentParagraphLines: [String] = []
        var leadEncountered = false

        func flushParagraph() {
            guard !currentParagraphLines.isEmpty else { return }
            let text = currentParagraphLines.joined(separator: " ").trimmingCharacters(in: .whitespaces)
            if !text.isEmpty {
                let formatted = formatInline(text)
                if enableLeadDropCap && !leadEncountered {
                    htmlBlocks.append("<p class=\"lead\">\(formatted)</p>")
                    leadEncountered = true
                } else {
                    htmlBlocks.append("<p>\(formatted)</p>")
                }
            }
            currentParagraphLines.removeAll()
        }

        func flushCodeBlock() {
            let codeContent = escapeHTML(codeBlockLines.joined(separator: "\n"))
            let langLabel = codeBlockLang.isEmpty ? "CÓDIGO" : codeBlockLang.uppercased()
            let block = """
            <div class="code-block-wrap">
              <div class="code-block-header">
                <span>\(langLabel)</span>
                <button class="code-copy-btn" type="button" aria-label="Copiar código al portapapeles">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  <span>Copiar</span>
                </button>
              </div>
              <pre><code>\(codeContent)</code></pre>
            </div>
            """
            htmlBlocks.append(block)
            codeBlockLines.removeAll()
            codeBlockLang = ""
            inCodeBlock = false
        }

        func flushBlockquote() {
            guard !blockquoteLines.isEmpty else { return }
            var quoteBody: [String] = []
            var citeText = ""

            for bLine in blockquoteLines {
                let trimmed = bLine.trimmingCharacters(in: .whitespaces)
                if trimmed.hasPrefix("—") || trimmed.hasPrefix("--") || trimmed.hasPrefix("- ") {
                    let author = trimmed.replacingOccurrences(of: "^(--|—|- )", with: "", options: .regularExpression).trimmingCharacters(in: .whitespaces)
                    citeText = formatInline(author)
                } else {
                    quoteBody.append(bLine)
                }
            }

            let formattedBody = formatInline(quoteBody.joined(separator: " "))
            var block = "<blockquote>\n  <p>\(formattedBody)</p>"
            if !citeText.isEmpty {
                block += "\n  <cite>\(citeText)</cite>"
            }
            block += "\n</blockquote>"
            htmlBlocks.append(block)
            blockquoteLines.removeAll()
            inBlockquote = false
        }

        func flushList() {
            guard !listItems.isEmpty else { return }
            let tag = isOrderedList ? "ol" : "ul"
            var block = "<\(tag)>\n"
            for item in listItems {
                block += "  <li>\(formatInline(item))</li>\n"
            }
            block += "</\(tag)>"
            htmlBlocks.append(block)
            listItems.removeAll()
            inList = false
        }

        for line in lines {
            let trimmed = line.trimmingCharacters(in: .whitespaces)

            // 1. Code blocks ```
            if trimmed.hasPrefix("```") {
                if inCodeBlock {
                    flushCodeBlock()
                } else {
                    flushParagraph()
                    flushBlockquote()
                    flushList()
                    inCodeBlock = true
                    codeBlockLang = String(trimmed.dropFirst(3)).trimmingCharacters(in: .whitespaces)
                }
                continue
            }

            if inCodeBlock {
                codeBlockLines.append(line)
                continue
            }

            // 2. Empty line indicates block boundary
            if trimmed.isEmpty {
                flushParagraph()
                flushBlockquote()
                flushList()
                continue
            }

            // 3. Blockquotes >
            if trimmed.hasPrefix(">") {
                flushParagraph()
                flushList()
                inBlockquote = true
                let quoteContent = String(trimmed.dropFirst()).trimmingCharacters(in: .whitespaces)
                blockquoteLines.append(quoteContent)
                continue
            } else if inBlockquote {
                flushBlockquote()
            }

            // 4. Unordered Lists - or *
            if trimmed.hasPrefix("- ") || trimmed.hasPrefix("* ") {
                flushParagraph()
                flushBlockquote()
                if inList && isOrderedList { flushList() }
                inList = true
                isOrderedList = false
                let item = String(trimmed.dropFirst(2)).trimmingCharacters(in: .whitespaces)
                listItems.append(item)
                continue
            }

            // 5. Ordered Lists 1. 2.
            if let match = trimmed.range(of: #"^\d+\.\s+"#, options: .regularExpression) {
                flushParagraph()
                flushBlockquote()
                if inList && !isOrderedList { flushList() }
                inList = true
                isOrderedList = true
                let item = String(trimmed[match.upperBound...]).trimmingCharacters(in: .whitespaces)
                listItems.append(item)
                continue
            }

            if inList {
                flushList()
            }

            // 6. Headers #, ##, ###, ####
            if trimmed.hasPrefix("### ") {
                flushParagraph()
                let title = String(trimmed.dropFirst(4)).trimmingCharacters(in: .whitespaces)
                htmlBlocks.append("<h3>\(formatInline(title))</h3>")
                continue
            } else if trimmed.hasPrefix("## ") {
                flushParagraph()
                let title = String(trimmed.dropFirst(3)).trimmingCharacters(in: .whitespaces)
                htmlBlocks.append("<h2>\(formatInline(title))</h2>")
                continue
            } else if trimmed.hasPrefix("# ") {
                flushParagraph()
                let title = String(trimmed.dropFirst(2)).trimmingCharacters(in: .whitespaces)
                htmlBlocks.append("<h1>\(formatInline(title))</h1>")
                continue
            }

            // 7. Standalone Images ![alt](url)
            if trimmed.hasPrefix("![") && trimmed.contains("](") && trimmed.hasSuffix(")") {
                flushParagraph()
                if let (alt, url) = parseImageMarkup(trimmed) {
                    let imageHTML = """
                    <div class="post-media-bleed">
                      <img src="\(url)" alt="\(alt)" loading="lazy">
                      \(alt.isEmpty ? "" : "<div class=\"media-caption\">\(alt)</div>")
                    </div>
                    """
                    htmlBlocks.append(imageHTML)
                    continue
                }
            }

            // 8. YouTube Video / Playlist Automatic Embed
            if (trimmed.hasPrefix("https://www.youtube.com/") || trimmed.hasPrefix("https://youtube.com/") || trimmed.hasPrefix("https://youtu.be/")) && !trimmed.contains(" ") {
                if let playlistId = extractYouTubePlaylistId(from: trimmed) {
                    flushParagraph()
                    let embed = """
                    <div class="video-embed-wrap">
                      <iframe src="https://www.youtube.com/embed/videoseries?list=\(playlistId)" title="Reproductor de Playlist de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
                    </div>
                    """
                    htmlBlocks.append(embed)
                    continue
                } else if let videoId = extractYouTubeVideoId(from: trimmed) {
                    flushParagraph()
                    let embed = """
                    <div class="video-embed-wrap">
                      <iframe src="https://www.youtube.com/embed/\(videoId)" title="Reproductor de Video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
                    </div>
                    """
                    htmlBlocks.append(embed)
                    continue
                }
            }

            // 9. Raw <iframe> or <div class="video-embed-wrap">
            if trimmed.hasPrefix("<iframe") && trimmed.contains("</iframe>") {
                flushParagraph()
                htmlBlocks.append("<div class=\"video-embed-wrap\">\n  \(trimmed)\n</div>")
                continue
            } else if trimmed.hasPrefix("<div class=\"video-embed-wrap") {
                flushParagraph()
                htmlBlocks.append(trimmed)
                continue
            }

            // 10. Horizontal Rule --- or ***
            if trimmed == "---" || trimmed == "***" {
                flushParagraph()
                htmlBlocks.append("<hr class=\"editorial-divider\" style=\"margin: 3rem 0; border: none; border-top: 1px solid var(--border-color);\">")
                continue
            }

            // Standard prose line
            currentParagraphLines.append(trimmed)
        }

        flushParagraph()
        flushBlockquote()
        flushList()
        if inCodeBlock { flushCodeBlock() }

        return htmlBlocks.joined(separator: "\n\n")
    }

    public static func formatInline(_ text: String) -> String {
        var str = text

        // Images ![alt](url)
        str = replaceRegex(in: str, pattern: #"!\[(.*?)\]\((.*?)\)"#) { match in
            let alt = match[1]
            let url = match[2]
            return "<img src=\"\(url)\" alt=\"\(alt)\" loading=\"lazy\">"
        }

        // Links [text](url)
        str = replaceRegex(in: str, pattern: #"\[(.*?)\]\((.*?)\)"#) { match in
            let label = match[1]
            let url = match[2]
            return "<a href=\"\(url)\">\(label)</a>"
        }

        // Bold **text** or __text__
        str = replaceRegex(in: str, pattern: #"\*\*(.*?)\*\*"#) { "<strong>\($0[1])</strong>" }
        str = replaceRegex(in: str, pattern: #"__(.*?)__"#) { "<strong>\($0[1])</strong>" }

        // Italic *text* or _text_
        str = replaceRegex(in: str, pattern: #"\*([^*]+?)\*"#) { "<em>\($0[1])</em>" }
        str = replaceRegex(in: str, pattern: #"_([^_]+?)_"#) { "<em>\($0[1])</em>" }

        // Inline code `code`
        str = replaceRegex(in: str, pattern: #"`([^`]+?)`"#) { "<code>\($0[1])</code>" }

        return str
    }

    private static func parseImageMarkup(_ str: String) -> (alt: String, url: String)? {
        guard let altStart = str.firstIndex(of: "["),
              let altEnd = str.firstIndex(of: "]"),
              let urlStart = str.firstIndex(of: "("),
              let urlEnd = str.lastIndex(of: ")"),
              altStart < altEnd && altEnd < urlStart && urlStart < urlEnd else {
            return nil
        }
        let alt = String(str[str.index(after: altStart)..<altEnd])
        let url = String(str[str.index(after: urlStart)..<urlEnd])
        return (alt, url)
    }

    public static func escapeHTML(_ text: String) -> String {
        return text
            .replacingOccurrences(of: "&", with: "&amp;")
            .replacingOccurrences(of: "<", with: "&lt;")
            .replacingOccurrences(of: ">", with: "&gt;")
            .replacingOccurrences(of: "\"", with: "&quot;")
            .replacingOccurrences(of: "'", with: "&#39;")
    }

    private static func replaceRegex(in text: String, pattern: String, transform: ([String]) -> String) -> String {
        guard let regex = try? NSRegularExpression(pattern: pattern, options: []) else { return text }
        let nsString = text as NSString
        let matches = regex.matches(in: text, options: [], range: NSRange(location: 0, length: nsString.length))
        
        var result = ""
        var lastLocation = 0

        for match in matches {
            if match.range.location > lastLocation {
                result += nsString.substring(with: NSRange(location: lastLocation, length: match.range.location - lastLocation))
            }

            var groupCaptures: [String] = []
            for i in 0..<match.numberOfRanges {
                let range = match.range(at: i)
                if range.location != NSNotFound {
                    groupCaptures.append(nsString.substring(with: range))
                } else {
                    groupCaptures.append("")
                }
            }

            result += transform(groupCaptures)
            lastLocation = match.range.location + match.range.length
        }

        if lastLocation < nsString.length {
            result += nsString.substring(with: NSRange(location: lastLocation, length: nsString.length - lastLocation))
        }

        return result
    }

    public static func extractYouTubePlaylistId(from url: String) -> String? {
        guard let regex = try? NSRegularExpression(pattern: #"[?&]list=([a-zA-Z0-9_-]+)"#),
              let match = regex.firstMatch(in: url, range: NSRange(location: 0, length: (url as NSString).length)) else {
            return nil
        }
        return (url as NSString).substring(with: match.range(at: 1))
    }

    public static func extractYouTubeVideoId(from url: String) -> String? {
        guard let regex = try? NSRegularExpression(pattern: #"(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})"#),
              let match = regex.firstMatch(in: url, range: NSRange(location: 0, length: (url as NSString).length)) else {
            return nil
        }
        return (url as NSString).substring(with: match.range(at: 1))
    }
}
