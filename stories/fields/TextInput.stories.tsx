import React from 'react'
import styled from 'styled-components'

import { TextInput, SUI } from '../..'

import type { TextInputProps } from '../..'

const Box = styled.div`
  max-width: 30rem;
`

export default {
  title: 'Fields/Text Input',
  component: TextInput,

  argTypes: {
    size: {
      options: SUI.SIZES,
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
    size: SUI.SIZE.MEDIUM,
  },
}

export const _TextInput = (props: TextInputProps) => (
  <Box>
    <TextInput {...props} />
  </Box>
)
