import React from 'react'
import styled from 'styled-components'

import { TextInput as SuiTextInput, SUI } from '../..'

const StyledTextInput = styled(SuiTextInput)`
  width: 30rem;
`

export default {
  title: 'Fields/Text Input',
  component: SuiTextInput,

  argTypes: {
    size: {
      options: SUI.SIZES,
      control: { type: 'inline-radio' },
    },
  },

  args: {
    error: '',
    helper: '',
    label: '',
    placeholder: 'A simple text input',
    size: SUI.SIZE.MEDIUM,
  },
}

export const TextInput = (props: any) => <StyledTextInput {...props} />
