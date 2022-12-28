import React from 'react'
import { styled } from 'styled-components'

import { TextInput } from '../../src'
import { Size, SIZES } from '../../src/constants'

import type { TextInputProps } from '../../src'

const Box = styled.div`
  max-width: 30rem;
`

export default {
  title: 'Fields/Text Input',
  component: TextInput,

  argTypes: {
    size: {
      options: SIZES,
      control: { type: 'inline-radio' },
    },
  },

  args: {
    defaultValue: '',
    disabled: false,
    error: '',
    helper: '',
    label: '',
    placeholder: 'A simple text input',
    size: Size.MEDIUM,
  },
}

export const _TextInput = (props: TextInputProps) => (
  <Box>
    <TextInput {...props} />
  </Box>
)
