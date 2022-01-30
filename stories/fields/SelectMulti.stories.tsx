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
  isMulti: true,
  label: '',
  options: [
    { value: 'bfd7ea', label: 'Beau Blue' },
    { value: 'c81d25', label: 'Lava' },
    { value: '087e8b', label: 'Metallic Seaweed' },
    { value: '0b3954', label: 'Prussian Blue' },
    { value: 'ff5a5f', label: 'Sizzling Red' },
  ],
  placeholder: 'Pick your colors',
  size: SUI.SIZE.MEDIUM,
}

export default {
  title: 'Fields/Select Multi',
  component: Select,

  argTypes: {
    size: {
      options: SUI.SIZES,
      control: { type: 'inline-radio' },
    },
  },

  ...args,
}

export const SelectMulti = (props: SelectProps) => (
  <Box>
    <Select {...props} />
  </Box>
)
