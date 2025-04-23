# repro-nextjs-baml

This is a reproduction showing that [BAML](https://github.com/boundaryml/baml) is not working with Next.js on macOS.

## Environment

```bash
$ sw_vers
ProductName:		macOS
ProductVersion:		15.4.1
BuildVersion:		24E263

$ uname -a
Darwin macbookpro.local 24.4.0 Darwin Kernel Version 24.4.0: Fri Apr 11 18:33:39 PDT 2025; root:xnu-11417.101.15~117/RELEASE_ARM64_T6020 arm64

$ node --version
v22.14.0

$ pnpm --version
10.5.2

$ cat package.json | jq '.dependencies'
{
  "@boundaryml/baml": "^0.84.4",
  "next": "15.3.1",
  "react": "^19.0.0",
  "react-dom": "^19.0.0"
}
```

## Reproduction

1. Clone the repository
2. Run `pnpm install`
3. Run `pnpm dev`
4. Open [http://localhost:3000/test](http://localhost:3000/test)
5. See the error

## Error

```

⨯ ./node_modules/.pnpm/@boundaryml+baml-darwin-arm64@0.84.4/node_modules/@boundaryml/baml-darwin-arm64/baml.darwin-arm64.node
Module parse failed: Unexpected character '�' (1:0)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
(Source code omitted for this binary file)

Import trace for requested module:
./node_modules/.pnpm/@boundaryml+baml-darwin-arm64@0.84.4/node_modules/@boundaryml/baml-darwin-arm64/baml.darwin-arm64.node
./node_modules/.pnpm/@boundaryml+baml@0.84.4/node_modules/@boundaryml/baml/native.js
./node_modules/.pnpm/@boundaryml+baml@0.84.4/node_modules/@boundaryml/baml/index.js
./baml_client/index.ts
./src/app/test/route.ts
GET /\_next/static/webpack/73b37c69507201a8.webpack.hot-update.json 500 in 822ms
GET /\_next/static/webpack/73b37c69507201a8.webpack.hot-update.json 500 in 7ms
⚠ Fast Refresh had to perform a full reload. Read more: https://nextjs.org/docs/messages/fast-refresh-reload
⚠ Fast Refresh had to perform a full reload due to a runtime error.
GET /test 500 in 9ms
```
