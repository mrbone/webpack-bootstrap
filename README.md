# Webpack Bootstrap

Easy implement webpack for any kind of font-end app.

[![](https://img.shields.io/badge/node-%3E%3D6.11.5-brightgreen.svg)](https://nodejs.org/en/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmrbone%2Fwebpack-bootstrap.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmrbone%2Fwebpack-bootstrap?ref=badge_shield)
[![](https://travis-ci.org/mrbone/webpack-bootstrap.svg?branch=master)](https://travis-ci.org/mrbone/webpack-bootstrap)
[![](https://codecov.io/gh/mrbone/webpack-bootstrap/branch/master/graph/badge.svg)](https://codecov.io/gh/mrbone/webpack-bootstrap?branch=master)

## Install

```bash
npm install webpack-bootstrap --save-dev
```

## Tasks

Webpack-bootstrap support `build` and `dev` task right now. Set a script in `package.json` to easily invoke tasks.

When you run the tasks below first time, you will been asked for which liberary you wanna compile, and then save this in `.wbootrc` in your package root folder.

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

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmrbone%2Fwebpack-bootstrap.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmrbone%2Fwebpack-bootstrap?ref=badge_large)