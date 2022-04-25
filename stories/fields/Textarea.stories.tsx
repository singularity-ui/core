import React from 'react'
import styled from 'styled-components'

import { Textarea, SUI } from '../..'

import type { TextareaProps } from '../..'

const Box = styled.div`
  width: 30rem;
`

export default {
  title: 'Fields/Textarea',
  component: Textarea,

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
    isAutoResizing: true,
    label: '',
    placeholder: 'A simple textarea',
    size: SUI.SIZE.MEDIUM,
  },
}

export const _Textarea = (props: TextareaProps) => (
  <Box>
    <Textarea {...props} />
  </Box>
)
