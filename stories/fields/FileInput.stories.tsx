import React from 'react'
import styled from 'styled-components'

import { FileInput as SuiFileInput, SUI } from '../..'

const StyledFileInput = styled(SuiFileInput)`
  width: 30rem;
`

export default {
  title: 'Fields/File Input',
  component: SuiFileInput,

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
    placeholder: 'Choose a file…',
    size: SUI.SIZE.MEDIUM,
  },
}

export const FileInput = props => <StyledFileInput {...props} />
