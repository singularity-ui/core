import React from 'react'
import styled from 'styled-components'

import { Checkbox as SuiCheckbox, SUI } from '../..'

const StyledCheckbox = styled(SuiCheckbox)`
  width: 30rem;
`

export default {
  title: 'Fields/Checkbox',
  component: SuiCheckbox,

  argTypes: {
    defaultChecked: {
      control: { type: 'boolean' },
    },
    size: {
      options: SUI.SIZES,
      control: { type: 'inline-radio' },
    },
  },

  args: {
    defaultChecked: false,
    disabled: false,
    label: 'Check it!',
    size: SUI.SIZE.MEDIUM,
  },
}

export const Checkbox = props => <StyledCheckbox {...props} />
