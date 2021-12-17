import React from 'react'
import styled from 'styled-components'

import { Textarea as SuiTextarea, SUI } from '../..'

const StyledTextarea = styled(SuiTextarea)`
  .Textarea {
    height: 10rem;
    width: 30rem;
  }
`

export default {
  title: 'Fields/Textarea',
  component: SuiTextarea,

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
    placeholder: 'A simple textarea',
    size: SUI.SIZE.MEDIUM,
  },
}

export const Textarea = (props: any) => <StyledTextarea {...props} />
