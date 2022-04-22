import { INLINE_TYPES } from './constants'

import type { BaseEditor } from 'slate'
import type { ReactEditor } from 'slate-react'

export const withLinks = (editor: BaseEditor & ReactEditor) => {
  const { isInline } = editor

  // eslint-disable-next-line no-param-reassign
  editor.isInline = element => (INLINE_TYPES.includes(element.type) ? true : isInline(element))

  return editor
}
