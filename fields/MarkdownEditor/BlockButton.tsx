/* eslint-disable react/jsx-props-no-spreading, react/prop-types, @typescript-eslint/no-use-before-define */

import React from 'react'
import { Editor as SlateEditor, Element as SlateElement, Transforms } from 'slate'
import { ReactEditor, useSlate } from 'slate-react'

import { Button } from './Button'

import type { FunctionComponent } from 'react'
import type { BaseEditor } from 'slate'

const LIST_TYPES = ['ol_list', 'ul_list', 'ul-list']

const toggleBlock = (editor: BaseEditor & ReactEditor, format: string) => {
  const isActive = isBlockActive(editor, format)
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: n => !SlateEditor.isEditor(n) && SlateElement.isElement(n) && LIST_TYPES.includes(n.type),
    split: true,
  })
  const newProperties: Partial<SlateElement> = {
    // eslint-disable-next-line no-nested-ternary
    type: isActive ? 'paragraph' : isList ? 'list-item' : format,
  }
  Transforms.setNodes<SlateElement>(editor, newProperties)

  if (!isActive && isList) {
    const block = { children: [], type: format }
    Transforms.wrapNodes(editor, block)
  }
}

const isBlockActive = (editor: BaseEditor & ReactEditor, format: string) => {
  const { selection } = editor
  if (!selection) {
    return false
  }

  const [match] = Array.from(
    SlateEditor.nodes(editor, {
      at: SlateEditor.unhangRange(editor, selection),
      match: n => !SlateEditor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
    }),
  )

  return !!match
}

export const BlockButton: FunctionComponent<{
  Icon: any
  format: string
}> = ({ format, Icon }) => {
  const editor = useSlate()

  return (
    <Button
      isActive={isBlockActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()

        toggleBlock(editor, format)
      }}
      type="button"
    >
      <Icon />
    </Button>
  )
}
