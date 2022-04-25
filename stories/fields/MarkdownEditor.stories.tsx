import React from 'react'

import { MarkdownEditor } from '../..'

import type { MarkdownEditorProps } from '../../fields/MarkdownEditor'

export default {
  title: 'Fields/Markdown Editor',
  component: MarkdownEditor,

  argTypes: {},

  args: {
    defaultValue: `
# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

A paragraph.

Some **bold text**.

Some _italic text_.

> A quote.

And [a link](https://www.example.com).

- A list item
- Another list item

1. A numbered list item
2. Another numbered list item
`,
    error: '',
    helper: '',
    isDisabled: false,
    label: '',
    placeholder: 'A amazing Markdown editor!',
  },
}

export const _MarkdownEditor = (props: MarkdownEditorProps) => <MarkdownEditor {...props} />
