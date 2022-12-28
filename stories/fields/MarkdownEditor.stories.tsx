import React from 'react'

// @ts-ignore
import exampleMarkdown from '../../public/documents/example.md'
import { MarkdownEditor } from '../../src'

import type { MarkdownEditorProps } from '../../src'

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
