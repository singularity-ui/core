import React from 'react'
import styled from 'styled-components'

import { SIZE, SIZES } from '../../common/constants'
import SingularitySelect from '../../fields/Select'

const StyledSelect = styled(SingularitySelect)`
  width: 30rem;
`

export default {
  title: 'Fields/Select',
  component: SingularitySelect,

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
    options: [
      { value: 'bfd7ea', label: 'Beau Blue' },
      { value: 'c81d25', label: 'Lava' },
      { value: '087e8b', label: 'Metallic Seaweed' },
      { value: '0b3954', label: 'Prussian Blue' },
      { value: 'ff5a5f', label: 'Sizzling Red' },
    ],
    placeholder: 'Color',
    size: SIZE.MEDIUM,
  },
}

export const Select = props => <StyledSelect {...props} />
