# esbuild-typescript-library-template

A template for building a library through typescript and bundling it through esbuild.

## Getting started

1. `git clone git@github.com:Unbuttun/esbuild-typescript-library-template.git my-project`
2. `cd my-project`
3. `pnpm install`

### Releasing

Under the hood, this library uses [semantic-release](https://github.com/semantic-release/semantic-release) and [commitizen](https://github.com/commitizen/cz-cli).
The goal is to avoid manual release process. Using `semantic-release` will automatically create a github release (hence tags) as well as an npm release.
Based on your commit history, `semantic-release` will automatically create a patch, feature or breaking release.

Commands:

- `cz`: interactive CLI that helps you generate a proper git commit message, using [commitizen](https://github.com/commitizen/cz-cli)
- `semantic-release`: triggers a release (used in CI)
