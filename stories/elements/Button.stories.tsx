import React from 'react'

import { Button as SuiButton, SUI } from '../..'

export default {
  title: 'Elements/Button',
  component: SuiButton,

  argTypes: {
    accent: {
      options: SUI.ACCENTS,
      control: { type: 'inline-radio' },
    },
    size: {
      options: SUI.SIZES,
      control: { type: 'inline-radio' },
    },
    type: {
      options: ['button', 'reset', 'submit'],
      control: { type: 'inline-radio' },
    },
  },

  args: {
    accent: SUI.ACCENT.PRIMARY,
    size: SUI.SIZE.MEDIUM,
    type: 'button',
  },
}

export const Button = props => <SuiButton {...props}>Button</SuiButton>
