import React from 'react'
import styled from 'styled-components'

import { SIZE, SIZES } from '../../common/constants'
import SingularityRadio from '../../fields/Radio'

const StyledRadio = styled(SingularityRadio)`
  // width: 30rem;
`

export default {
  title: 'Fields/Radio',
  component: SingularityRadio,

  argTypes: {
    defaultChecked: {
      control: { type: 'boolean' },
    },
    size: {
      options: SIZES,
      control: { type: 'inline-radio' },
    },
  },

  args: {
    defaultChecked: false,
    disabled: false,
    label: 'Choice A',
    letter: 'A',
    size: SIZE.MEDIUM,
  },
}

export const Radio = props => <StyledRadio {...props} />
