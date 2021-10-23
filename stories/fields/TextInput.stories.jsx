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
    size: {
      options: SIZES,
      control: { type: 'inline-radio' },
    },
  },

  args: {
    error: '',
    helper: '',
    label: '',
    placeholder: 'A simple text input',
    size: SIZE.MEDIUM,
  },
}

export const TextInput = props => <StyledTextInput {...props} />
