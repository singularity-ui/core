import { getAbsolutePath } from 'esm-path'
import { promises as fs } from 'fs'

import { deserialize } from '../helpers'

describe('fields/MarkdownEditor/helpers#deserialize()', () => {
  test(`should return the expected AST`, async () => {
    const sourceAsMarkdown = await fs.readFile(
      getAbsolutePath(import.meta.url, `__fixtures__/desarialize.source.md`),
      'utf8',
    )

    const result = deserialize(sourceAsMarkdown)

    expect(result).toMatchSnapshot()
  })
})
