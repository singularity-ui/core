const { promises: fs } = require('fs')
const shelljs = require('shelljs')

const VERSION = process.env.npm_package_version

function run(command) {
  shelljs.echo(`Running: \`${command}\`…`)
  const output = shelljs.exec(command)

  if (output.code !== 0) {
    shelljs.exit(1)
  }
}

;(async () => {
  try {
    if (VERSION === undefined) {
      throw new Error('`process.env.npm_package_version` is undefined.')
    }

    run(`git checkout -B ${VERSION}`)

    const distPackageJson = await fs.readFile('./dist/package.json', 'utf-8')
    const distPackage = JSON.parse(distPackageJson)
    distPackage.version = VERSION
    const updatedDistPackageJson = JSON.stringify(distPackage, null, 2)
    await fs.writeFile('./dist/package.json', updatedDistPackageJson)

    run(`git add .`)
  } catch (err) {
    shelljs.echo(`[scripts/prepareVersionBump.js] Error: ${err.message}`)

    shelljs.exit(1)
  }
})()
