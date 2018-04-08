# Webpack Bootstrap

Easy implement webpack for any kind of font-end app.

## Install

```bash
npm install webpack-bootstrap --save-dev
```

## Tasks

Webpack-bootstrap support `build` and `dev` task right now. Set a script in `package.json` to easily invoke tasks.

```json
"scripts": {
  "wboot": "wboot"
}
```

### build

Create a js bundle from `src/index`, the extension can be `js/jsx`.

```bash
yarn wboot build
```

### start

Start a local server.

```bash
yarn wboot dev
```