import React from 'react'

import { MarkdownEditor } from '../..'

export default {
  title: 'Fields/Markdown Editor',
  component: MarkdownEditor,

  argTypes: {},

  args: {
    defaultValue: `This is editable **rich** text, _much_ better than a \`<textarea>\`!

Since it’s rich text, you can do things like turn a selection of text **bold**,
or add a semantically rendered block quote in the middle of the page, like this:

> A wise quote.

Try it out for yourself!`,
    error: '',
    helper: '',
    isDisabled: false,
    label: '',
    placeholder: 'A amazing Markdown editor!',
  },
}

export const _MarkdownEditor = (props: any) => <MarkdownEditor {...props} />
