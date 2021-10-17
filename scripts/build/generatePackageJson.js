const { promises: fs } = require('fs')
const R = require('ramda')

const rootPackage = require('../../package.json')

const distPackageExtraProps = {
  author: {
    email: 'ivan.gabriele@gmail.com',
    name: 'Ivan Gabriele',
    url: 'https://www.ivangabriele.com',
  },
  bugs: {
    url: 'https://github.com/ivangabriele/singularity/issues',
  },
  engines: {
    node: '^12.20.0 || ^14.13.1 || >=16.0.0',
  },
  exports: {
    '.': './index.js',
    './*': './*.js',
    './icons/*': './icons/*.js',
    './package.json': './package.json',
  },
  homepage: 'http://ivangabriele.github.io/singularity',
  main: './cjs/index.js',
  name: '@ivangabriele/singularity',
  publishConfig: {
    access: 'public',
  },
  repository: {
    type: 'git',
    url: 'git+https://github.com/ivangabriele/singularity.git',
  },
  type: 'module',
}

// eslint-disable-next-line import/newline-after-import
;(async () => {
  const distPackage = R.pipe(
    R.omit(['devDependencies', 'eslintIgnore', 'prettier', 'private', 'release', 'scripts', 'workspaces']),
    R.mergeLeft(distPackageExtraProps),
  )(rootPackage)
  const distPackageJson = JSON.stringify(distPackage, null, 2)

  await fs.writeFile('./dist/package.json', distPackageJson)
})()
