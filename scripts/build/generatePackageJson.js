const { promises: fs } = require('fs')
const glob = require('glob')
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
  homepage: 'http://ivangabriele.github.io/singularity',
  repository: {
    type: 'git',
    url: 'git+https://github.com/ivangabriele/singularity.git',
  },
}

// eslint-disable-next-line import/newline-after-import
;(async () => {
  const distFilePaths = glob
    .sync('./dist/*.js')
    .map(filePath => filePath.replace('./dist/', './'))
    .sort()

  const distPackage = R.pipe(
    R.omit(['devDependencies', 'eslintIgnore', 'prettier', 'private', 'scripts']),
    R.assoc('main', './index.js'),
    R.assoc('files', distFilePaths),
    R.mergeLeft(distPackageExtraProps),
  )(rootPackage)
  const distPackageJson = JSON.stringify(distPackage, null, 2)

  await fs.writeFile('./dist/package.json', distPackageJson)
})()
