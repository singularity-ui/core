import React from 'react'

import { FileInput, SUI } from '../..'

export default {
  title: 'Fields/File Input',
  component: FileInput,

  argTypes: {
    size: {
      options: SUI.SIZES,
      control: { type: 'inline-radio' },
    },
  },

  args: {
    error: '',
    helper: '',
    label: '',
    placeholder: 'Click or drag and drop a file…',
    size: SUI.SIZE.MEDIUM,
  },
}

export const _FileInput = (props: any) => <FileInput {...props} />
