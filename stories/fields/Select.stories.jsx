import React from 'react'

import { SIZE, SIZES } from '../../common/constants'
import SingularitySelect from '../../fields/Select'

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
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    size: SIZE.MEDIUM,
  },
}

export const Select = props => <SingularitySelect {...props} />
