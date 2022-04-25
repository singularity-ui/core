import React from 'react'

import { Button, SUI } from '../..'

import type { ButtonProps } from '../..'

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
    disabled: false,
    size: SUI.SIZE.MEDIUM,
    type: 'button',
  },
}

export const _Button = (props: ButtonProps) => <Button {...props}>Button</Button>
