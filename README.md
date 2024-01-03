# esbuild-typescript-library-template

A template for building a library through typescript and bundling it through esbuild.

Uses yarn v4.

![npm bundle size](https://img.shields.io/bundlephobia/minzip/esbuild-typescript-library-template?logo=files&style=for-the-badge)
![npm](https://img.shields.io/npm/v/esbuild-typescript-library-template?logo=npm&style=for-the-badge)
![node-current](https://img.shields.io/badge/Node-%3E=14-success?style=for-the-badge&logo=node)
![npm](https://img.shields.io/npm/dw/esbuild-typescript-library-template?style=for-the-badge)

## Getting started

1. `git clone git@github.com:spa5k/esbuild-typescript-library-template.git my-project`
2. `cd my-project`
3. `yarn install`

### Releasing

Under the hood, this library uses [semantic-release](https://github.com/semantic-release/semantic-release) and [commitizen](https://github.com/commitizen/cz-cli).
The goal is to avoid manual release process. Using `semantic-release` will automatically create a github release (hence tags) as well as an npm release.
Based on your commit history, `semantic-release` will automatically create a patch, feature or breaking release.

### Visualization of this Repo.

<img src="./diagram.svg" width="300" height="300">

Commands:

- `semantic-release`: triggers a release (used in CI)
