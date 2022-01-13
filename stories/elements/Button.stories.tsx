import React from 'react'

import { Button, SUI } from '../..'

export default {
  title: 'Elements/Button',
  component: Button,

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

export const _Button = (props: any) => <Button {...props}>Button</Button>
