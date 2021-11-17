const { promises: fs } = require('fs')

// eslint-disable-next-line import/newline-after-import
;(async () => {
  const globalStyleDeclarationSource = await fs.readFile('./dist/GlobalStyle.d.ts', 'utf-8')
  const globalStyleDeclarationSourceWithoutFonts = globalStyleDeclarationSource
    .replace(/import .*\.css';/gm, '')
    .replace(/[\n\r]/g, '')
    .concat('\n')

  await fs.writeFile('./dist/GlobalStyle.d.ts', globalStyleDeclarationSourceWithoutFonts, 'utf-8')
})()
