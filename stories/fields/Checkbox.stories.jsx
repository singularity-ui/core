import React from 'react'
import styled from 'styled-components'

import { SIZE, SIZES } from '../../common/constants'
import SingularityCheckbox from '../../fields/Checkbox'

const StyledCheckbox = styled(SingularityCheckbox)`
  width: 20rem;
`

export default {
  title: 'Fields/Checkbox',
  component: SingularityCheckbox,

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
    label: 'Check it!',
    size: SIZE.MEDIUM,
  },
}

export const Checkbox = props => <StyledCheckbox {...props} />
