import React from 'react'

import { FileInput } from '../../src'
import { Size, SIZES } from '../../src/constants'

import type { FileInputProps } from '../../src'

export default {
  title: 'Fields/File Input',
  component: FileInput,

  argTypes: {
    size: {
      options: SIZES,
      control: { type: 'inline-radio' },
    },
  },

  args: {
    disabled: false,
    error: '',
    helper: '',
    label: '',
    placeholder: 'Click or drag and drop a file…',
    size: Size.MEDIUM,
  },
}

export const _FileInput = (props: FileInputProps) => <FileInput {...props} />
