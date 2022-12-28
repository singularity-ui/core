const { promises: fs } = require('fs')
const R = require('ramda')

const distPackageMainProps = {
  type: 'module',
  exports: './index.js',
  types: './types.d.ts',
  sideEffects: false,
}

const distPackageExtraProps = {
  author: {
    email: 'ivan.gabriele@gmail.com',
    name: 'Ivan Gabriele',
    url: 'https://www.ivangabriele.com',
  },
  bugs: {
    url: 'https://github.com/singularity-ui/core/issues',
  },
  // funding: 'https://github.com/singularity-ui/core?sponsor=1',
  homepage: 'https://singularity-ui.github.io/core/',
  name: '@singularity/core',
  publishConfig: {
    access: 'public',
    tag: 'latest',
  },
  repository: {
    type: 'git',
    url: 'git+https://github.com/singularity-ui/core.git',
  },
}

;(async () => {
  const rootPackageJson = await fs.readFile('./package.json', 'utf-8')
  const rootPackage = JSON.parse(rootPackageJson)
  const rootPackageDependencies = R.pick(['dependencies', 'peerDependencies'])(rootPackage)
  const distPackage = R.pipe(
    R.omit([
      '//',
      'dependencies',
      'devDependencies',
      'engines',
      'lint-staged',
      'main',
      'packageManager',
      'peerDependencies',
      'prettier',
      'private',
      'release',
      'scripts',
    ]),
    R.mergeLeft(distPackageMainProps),
    R.mergeLeft(rootPackageDependencies),
    R.mergeLeft(distPackageExtraProps),
  )(rootPackage)
  const distPackageJson = JSON.stringify(distPackage, null, 2)

  await fs.writeFile('./dist/package.json', distPackageJson, 'utf-8')
})()
