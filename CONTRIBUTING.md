# Contributing

- [Developing](#developing)
  - [IDE](#ide)
    - [Visual Studio Code](#visual-studio-code)

## Development

### First Setup

You need [Node.js v18](https://nodejs.org/en/).

1. Install Yarn Berry:

```sh
corepack enable
```

2. Install dependencies:

```sh
yarn
```

3. Install Git hooks:

```sh
yarn setup
```

4. Setup your IDE:

Follow [Yarn documentation](https://yarnpkg.com/getting-started/editor-sdks).

### Run locally

```sh
yarn start # or `yarn dev` if you don't want to auto-open the browser
```

### Conventions

Please respect [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) messages as defined by Angular in
[their contributing documentation](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit).

### Release

The release process is automated, including versionning and release notes generation, using
[semantic-release](https://github.com/semantic-release/semantic-release).

1. Go to [Github Actions Release Workflow](https://github.com/MTES-MCT/monitor-ui/actions/workflows/release.yml)
2. Click on "Run workflow" > "Run workflow" ("Branch: main" should be selected by default).
3. ⚠️ This will generate a version pull request with a title looking like `ci(release): X.Y.Z`.  
   You **MUST** merge this pull request before merging new pull requests.  
   _Why? Because this PR include both the release notes and the new version from which later versions will be
   calculated._

#### Versionning

In short, 'feat(...):' will generated minor versions and 'fix(...):' will generate patch versions.

##### Breaking changes

If you have to release a BREAKING CHANGE, you should look at the
[official documentation](https://www.conventionalcommits.org/en/v1.0.0/#commit-message-with-description-and-breaking-change-footer)
and you may look at this [pull request](https://github.com/MTES-MCT/monitor-ui/pull/131) as an example.

In the case of a BREAKING CHANGE, it's **strongly advised** to add an exclamation point at the end of the scope (or type
if there is no scope) in the commit message, i.e.:

```sh
git commit -m "feat(fields)!: this prop has been removed"
git commit -m "feat!: all theses component props are now strings instead of numbers"
```

And **don't forget** the `BREAKING CHANGE: ...` in the commit message body.

### Maintenance

#### Updating icons

1. Copy the new SVG icons in `src/assets/icons` folder
2. Run

```sh
yarn icons
```

to generate React components from the SVG icons.

#### Updating caniuse browserlist

We
[should regularly update `browserlist` database](https://github.com/browserslist/browserslist#browsers-data-updating):

```sh
npx browserslist@latest --update-db
```

### IDE

#### Visual Studio Code

Recommended settings (`.vscode/settings.json`):

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.formatOnSave": true,
  "eslint.codeActionsOnSave.mode": "all",
  "eslint.format.enable": true,
  "eslint.packageManager": "yarn",
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
