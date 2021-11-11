import React from 'react'
import styled from 'styled-components'

import { Select as SuiSelect, SUI } from '../..'

const StyledSelect = styled(SuiSelect)`
  width: 30rem;
`

export default {
  title: 'Fields/Select',
  component: SuiSelect,

  argTypes: {
    size: {
      options: SUI.SIZES,
      control: { type: 'inline-radio' },
    },
  },

  args: {
    error: '',
    helper: '',
    isAsync: false,
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
  },
}

export const Select = props => <StyledSelect {...props} />
