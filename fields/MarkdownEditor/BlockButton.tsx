import React from 'react'
import { useSlate } from 'slate-react'

import { Button } from './Button'
import { isBlockActive, toggleBlock } from './helpers'

import type { FunctionComponent, MouseEventHandler } from 'react'

export type BlockButtonProps = {
  Icon: any
  format: string
}
export const BlockButton: FunctionComponent<BlockButtonProps> = ({ format, Icon }) => {
  const editor = useSlate()

  const handleMouseDown: MouseEventHandler<HTMLButtonElement> = React.useCallback(
    event => {
      event.preventDefault()

      toggleBlock(editor, format)
    },
    [editor, format],
  )

  return (
    <Button isActive={isBlockActive(editor, format)} onMouseDown={handleMouseDown} type="button">
      <Icon />
    </Button>
  )
}
