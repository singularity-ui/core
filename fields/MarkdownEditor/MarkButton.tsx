/* eslint-disable react/jsx-props-no-spreading, react/prop-types, @typescript-eslint/no-use-before-define */

import React from 'react'
import { Editor as SlateEditor } from 'slate'
import { useSlate } from 'slate-react'

import { Button } from './Button'

import type { FunctionComponent } from 'react'
import type { BaseEditor } from 'slate'
import type { ReactEditor } from 'slate-react'

const toggleMark = (editor: BaseEditor & ReactEditor, format: string) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    SlateEditor.removeMark(editor, format)
  } else {
    SlateEditor.addMark(editor, format, true)
  }
}

const isMarkActive = (editor: BaseEditor & ReactEditor, format: string) => {
  const marks = SlateEditor.marks(editor)

  return marks ? marks[format] === true : false
}

export const MarkButton: FunctionComponent<{
  Icon: any
  format: string
}> = ({ format, Icon }) => {
  const editor = useSlate()

  return (
    <Button
      isActive={isMarkActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
      type="button"
    >
      <Icon />
    </Button>
  )
}
