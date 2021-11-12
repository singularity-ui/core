/* eslint-disable prefer-template, @typescript-eslint/no-use-before-define */

import glob from 'glob'
import fs from 'graceful-fs'
import ora from 'ora'
// eslint-disable-next-line import/no-extraneous-dependencies
import prettier from 'prettier'
import rimraf from 'rimraf'

const prettierConfig = JSON.parse(fs.readFileSync('./node_modules/@ivangabriele/prettier-config/index.json', 'utf-8'))

function getFileName(svgIconPath) {
  return /([^/]+)$/.exec(svgIconPath)[1]
}

function convertPathToTsxIconName(svgIconPath) {
  return (
    'Material' +
    /([^/]+)_24px\.svg$/
      .exec(svgIconPath)[1]
      .replace(/^([0-9]*[a-z])/i, $1 => $1.toUpperCase())
      .replace(/360/g, 'three_sixty')
      .replace(/60/g, 'sixty')
      .replace(/30/g, 'thirty')
      .replace(/24/g, 'twenty_four')
      .replace(/23/g, 'twenty_three')
      .replace(/22/g, 'twenty_two')
      .replace(/21/g, 'twenty_one')
      .replace(/20/g, 'twenty')
      .replace(/19/g, 'nineteen')
      .replace(/18/g, 'eighteen')
      .replace(/17/g, 'seventeen')
      .replace(/16/g, 'sixteen')
      .replace(/15/g, 'fifteen')
      .replace(/14/g, 'fourteen')
      .replace(/13/g, 'thirteen')
      .replace(/12/g, 'twelve')
      .replace(/11/g, 'eleven')
      .replace(/10/g, 'ten')
      .replace(/9/g, 'nine')
      .replace(/8/g, 'height')
      .replace(/7/g, 'seven')
      .replace(/6/g, 'six')
      .replace(/5/g, 'five')
      .replace(/4/g, 'four')
      .replace(/3/g, 'three')
      .replace(/2/g, 'two')
      .replace(/1/g, 'one')
      .replace(/([-_][a-z])/gi, $1 => $1.toUpperCase().replace('-', '').replace('_', ''))
      .replace(/^([a-z])/i, $1 => $1.toUpperCase())
  )
}

function readMaterialIcon({ count, index, spinner, svgIconPaths }) {
  const svgIconPath = svgIconPaths[index]
  if (svgIconPath === undefined) {
    readMaterialIcon({
      count,
      index: index + 1,
      svgIconPaths,
    })

    return
  }

  const svgFileName = getFileName(svgIconPath)
  const tsxIconName = convertPathToTsxIconName(svgIconPath)
  // eslint-disable-next-line no-param-reassign
  spinner.text = `Generating Material icons: [${index}/${count}] Converting ${svgFileName} to ${tsxIconName}.tsx…`

  fs.readFile(svgIconPath, 'utf-8', (err, svgIconSource) => {
    writeMaterialIcon({
      count,
      index,
      spinner,
      svgIconPaths,
      svgIconSource,
      tsxIconName,
    })
  })
}

function writeMaterialIcon({ count, index, spinner, svgIconPaths, svgIconSource, tsxIconName }) {
  const tsxIconSource = prettier.format(
    `
    import React from 'react'

    import Icon from '../Icon'

    const ${tsxIconName}Svg = props => (
      ${svgIconSource.replace(/>/, ` {...props}>`)}
    )

    const ${tsxIconName} = props => <Icon as={${tsxIconName}Svg} {...props} />

    ${tsxIconName}.defaultProps = { ...Icon.defaultProps }

    ${tsxIconName}.propTypes = { ...Icon.propTypes }

    export default ${tsxIconName}
  `,
    {
      parser: 'babel',
      ...prettierConfig,
    },
  )

  fs.writeFile(`./icons/material/${tsxIconName}.tsx`, tsxIconSource, 'utf-8', () => {
    if (index === count - 1) {
      spinner.succeed('Material icons generated.')

      process.exit()
    }

    readMaterialIcon({
      count,
      index: index + 1,
      spinner,
      svgIconPaths,
    })
  })
}

const generateMaterialIcons = () => {
  const spinner = ora('Generating Material icons: Fetching files…').start()

  rimraf.sync('./icons/material')
  fs.mkdirSync('./icons/material')

  const svgIconPaths = glob.sync('./submodules/material-ui/packages/mui-icons-material/material-icons/*.svg')
  const count = svgIconPaths.length
  const index = 0

  readMaterialIcon({
    count,
    index,
    spinner,
    svgIconPaths,
  })
}

generateMaterialIcons()
