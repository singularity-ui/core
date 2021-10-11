import React from 'react'

import { ACCENT, ACCENTS, SIZE, SIZES } from '../../common/constants'
import SingularityButton from '../../elements/Button'

export default {
  title: 'Elements/Button',
  component: SingularityButton,

  argTypes: {
    accent: {
      options: ACCENTS,
      control: { type: 'inline-radio' },
    },
    size: {
      options: SIZES,
      control: { type: 'inline-radio' },
    },
    type: {
      control: { type: 'inline-radio' },
    },
  },

  args: {
    accent: ACCENT.PRIMARY,
    size: SIZE.MEDIUM,
    type: 'button',
  },
}

export const Button = props => <SingularityButton {...props}>Button</SingularityButton>
