import React from 'react'
import styled from 'styled-components'

import { Select, SUI } from '../..'

import type { SelectProps } from '../..'

const Box = styled.div`
  max-width: 30rem;
`

const args: SelectProps = {
  error: '',
  helper: '',
  isMulti: false,
  label: '',
  options: [
    { value: '36', label: 'XS' },
    { value: '38', label: 'S' },
    { value: '40', label: 'M' },
    { value: '42', label: 'L' },
    { value: '44', label: 'XL' },
  ],
  placeholder: 'Pick your size',
  size: SUI.SIZE.MEDIUM,
}

export default {
  title: 'Fields/Select',
  component: Select,

  argTypes: {
    size: {
      options: SUI.SIZES,
      control: { type: 'inline-radio' },
    },
  },

  ...args,
}

export const _Select = (props: SelectProps) => (
  <Box>
    <Select {...props} />
  </Box>
)
