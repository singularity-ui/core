import { useSlate } from 'slate-react'

import { Button } from './Button'
import { isBlockActive, toggleBlock } from './helpers'

import type { MarkdownEditorFormat } from './constants'
import type { FunctionComponent } from 'react'

export type BlockButtonProps = {
  Icon: FunctionComponent
  format: MarkdownEditorFormat
}
export function BlockButton({ format, Icon }: BlockButtonProps) {
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
