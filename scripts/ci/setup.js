const { CI } = process.env
const { promises: fs } = require('fs')

const packageConfig = require('../../package.json')

if (CI === undefined) {
  process.exit()
}

;(async () => {
  delete packageConfig.workspaces
  const newPackageSource = JSON.stringify(packageConfig, null, 2)

  await fs.writeFile(`${process.cwd()}/package.json`, newPackageSource, 'utf-8')
})()
