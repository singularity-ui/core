import React from 'react'
import styled from 'styled-components'

import { SIZE, SIZES } from '../../common/constants'
import SingularityTextarea from '../../fields/Textarea'

const StyledTextarea = styled(SingularityTextarea)`
  .Textarea {
    height: 10rem;
    width: 30rem;
  }
`

export default {
  title: 'Fields/Textarea',
  component: SingularityTextarea,

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
    placeholder: 'A simple textarea',
    size: SIZE.MEDIUM,
  },
}

export const Textarea = props => <StyledTextarea {...props} />
