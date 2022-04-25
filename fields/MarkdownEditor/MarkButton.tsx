import React from 'react'
import { useSlate } from 'slate-react'

import { Button } from './Button'
import { isMarkActive, isSelectionCollapsed, toggleMark } from './helpers'

import type { MarkdownEditorFormat } from './constants'
import type { FunctionComponent } from 'react'

export type MarkButtonProps = {
  Icon: FunctionComponent
  format: MarkdownEditorFormat
}
export const MarkButton: FunctionComponent<MarkButtonProps> = ({ format, Icon }) => {
  const editor = useSlate()

  const isActive = isMarkActive(editor, format)
  const isCollapsed = isSelectionCollapsed(editor)

  const toggle = () => {
    toggleMark(editor, format)
  }

  return (
    <Button isActive={isActive} isDisabled={!isActive && isCollapsed} onClick={toggle} type="button">
      <Icon />
    </Button>
  )
}
