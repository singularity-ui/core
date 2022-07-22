import React from 'react'

import { MarkdownEditor } from '../..'
// @ts-ignore
import exampleMarkdown from '../../public/documents/example.md'

import type { MarkdownEditorProps } from '../..'

export default {
  title: 'Fields/Markdown Editor',
  component: MarkdownEditor,

  argTypes: {},

  args: {
    defaultValue: exampleMarkdown,
    error: '',
    helper: '',
    isDisabled: false,
    label: '',
    placeholder: 'A amazing Markdown editor!',
    name: 'markdownEditor',
  },
}

export const _MarkdownEditor = (props: MarkdownEditorProps) => <MarkdownEditor {...props} />
