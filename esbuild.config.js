const esbuild = require("esbuild")
const { sassPlugin } = require("esbuild-sass-plugin")
const fs = require("fs")
const path = require("path")

const watchMode = process.argv.includes("--watch")
const production = process.env.BRIDGETOWN_ENV === "production"

fs.mkdirSync(".bridgetown-cache/frontend-bundling", { recursive: true })

const stripFrontendPrefix = (str) => str.replace(/^frontend\//, "")

const manifestPlugin = {
  name: "manifest",
  setup(build) {
    build.onEnd(result => {
      if (!result.metafile) return
      const manifest = {}
      for (const [outputFile, value] of Object.entries(result.metafile.outputs)) {
        if (outputFile.endsWith(".map")) continue
        const basename = path.basename(outputFile)
        const inputs = Object.keys(value.inputs)

        if (value.entryPoint) {
          manifest[stripFrontendPrefix(value.entryPoint)] = basename
        } else {
          const scssInput = inputs.find(i => /\.(s[ac]ss)$/.test(i))
          if (scssInput) {
            manifest[stripFrontendPrefix(scssInput)] = basename
          }
        }
      }
      fs.writeFileSync(
        ".bridgetown-cache/frontend-bundling/manifest.json",
        JSON.stringify(manifest)
      )
    })
  }
}

const config = {
  entryPoints: ["frontend/javascript/index.js"],
  bundle: true,
  outdir: "output/_bridgetown/static",
  entryNames: "[name]-[hash]",
  metafile: true,
  sourcemap: !production,
  minify: production,
  loader: {
    ".woff": "file",
    ".woff2": "file",
    ".ttf": "file",
    ".eot": "file",
    ".svg": "file",
    ".png": "file",
    ".gif": "file",
    ".jpg": "file",
  },
  plugins: [
    sassPlugin({
      quietDeps: true,
      silenceDeprecations: ["import"],
      loadPaths: [
        path.resolve(__dirname, "src/_components"),
        path.resolve(__dirname, "node_modules")
      ]
    }),
    manifestPlugin
  ]
}

if (watchMode) {
  esbuild.context(config).then(ctx => {
    ctx.watch()
    console.log("Watching for changes...")
  })
} else {
  esbuild.build(config).catch(() => process.exit(1))
}
