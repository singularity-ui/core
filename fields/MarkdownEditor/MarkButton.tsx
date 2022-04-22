import React from 'react'
import { useSlate } from 'slate-react'

import { Button } from './Button'
import { isMarkActive, toggleMark } from './helpers'

import type { FunctionComponent, MouseEventHandler } from 'react'

export type MarkButtonProps = {
  Icon: any
  format: string
}
export const MarkButton: FunctionComponent<MarkButtonProps> = ({ format, Icon }) => {
  const editor = useSlate()

  const handleMouseDown: MouseEventHandler<HTMLButtonElement> = React.useCallback(
    event => {
      event.preventDefault()

      toggleMark(editor, format)
    },
    [editor, format],
  )

  return (
    <Button isActive={isMarkActive(editor, format)} onMouseDown={handleMouseDown} type="button">
      <Icon />
    </Button>
  )
}
