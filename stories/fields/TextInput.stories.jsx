import React from 'react'
import styled from 'styled-components'

import { SIZE, SIZES } from '../../common/constants'
import SingularityTextInput from '../../fields/TextInput'

const StyledTextInput = styled(SingularityTextInput)`
  width: 30rem;
`

export default {
  title: 'Fields/Text Input',
  component: SingularityTextInput,

  argTypes: {
    placeholder: 'Text Input',
    size: {
      options: SIZES,
      control: { type: 'inline-radio' },
    },
  },

  args: {
    size: SIZE.MEDIUM,
  },
}

export const TextInput = props => <StyledTextInput {...props} />
