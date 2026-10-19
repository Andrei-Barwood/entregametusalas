// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "EditorCMS",
    platforms: [
        .macOS(.v13)
    ],
    products: [
        .executable(name: "cms", targets: ["EditorCMS"])
    ],
    dependencies: [],
    targets: [
        .executableTarget(
            name: "EditorCMS",
            path: "Sources/EditorCMS"
        )
    ]
)
