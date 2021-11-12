import React from 'react'
import styled from 'styled-components'

import { Radio as SuiRadio, SUI } from '../..'

const StyledRadio = styled(SuiRadio)`
  // width: 30rem;
`

export default {
  title: 'Fields/Radio',
  component: SuiRadio,

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
    label: 'Choice A',
    letter: 'A',
    size: SUI.SIZE.MEDIUM,
  },
}

export const Radio = props => <StyledRadio {...props} />
