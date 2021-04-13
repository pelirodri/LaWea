// swift-tools-version:5.3
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "laweáswift",
    platforms: [
        .macOS("10.15.4")
    ],
    products: [
        .library(name: "LaWeáInterpreter", targets: ["LaWeáInterpreter"]),
        .executable(name: "laweáswift", targets: ["laweáswift"])
    ],
    targets: [
        .target(name: "LaWeáInterpreter", path: "src/lib/LaWeáInterpreter"),
        .target(
            name: "laweáswift",
            dependencies: ["LaWeáInterpreter"],
            path: "src",
            exclude: ["lib"],
            swiftSettings: [.unsafeFlags(["-parse-as-library"])]
        )
    ]
)
