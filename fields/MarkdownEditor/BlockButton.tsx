import React from 'react'
import { useSlate } from 'slate-react'

import { Button } from './Button'
import { isBlockActive, toggleBlock } from './helpers'

import type { MarkdownEditorFormat } from './constants'
import type { FunctionComponent } from 'react'

export type BlockButtonProps = {
  Icon: FunctionComponent
  format: MarkdownEditorFormat
}
export const BlockButton: FunctionComponent<BlockButtonProps> = ({ format, Icon }) => {
  const editor = useSlate()

  const isActive = isBlockActive(editor, format)

  const toggle = () => {
    toggleBlock(editor, format)
  }

  return (
    <Button isActive={isActive} onClick={toggle} type="button">
      <Icon />
    </Button>
  )
}
