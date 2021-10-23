import React from 'react'
import styled from 'styled-components'

import { SIZE, SIZES } from '../../common/constants'
import SingularityChoice from '../../fields/Choice'

const StyledChoice = styled(SingularityChoice)`
  // width: 30rem;
`

export default {
  title: 'Fields/Choice',
  component: SingularityChoice,

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
    defaultChecked: true,
    disabled: false,
    label: 'Choice A',
    letter: 'A',
    size: SIZE.MEDIUM,
  },
}

export const Choice = props => <StyledChoice {...props} />
