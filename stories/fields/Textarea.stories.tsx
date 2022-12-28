import React from 'react'
import { styled } from 'styled-components'

import { Textarea } from '../../src'
import { Size, SIZES } from '../../src/constants'

import type { TextareaProps } from '../../src'

const Box = styled.div`
  width: 30rem;
`

export default {
  title: 'Fields/Textarea',
  component: Textarea,

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
    isAutoResizing: true,
    label: '',
    placeholder: 'A simple textarea',
    size: Size.MEDIUM,
  },
}

export const _Textarea = (props: TextareaProps) => (
  <Box>
    <Textarea {...props} />
  </Box>
)
