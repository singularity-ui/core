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
  },
}

export const Select = (props: any) => <StyledSelect {...props} />
