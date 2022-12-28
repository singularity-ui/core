import React from 'react'

import { Button } from '../../src'
import { Accent, ACCENTS, Size, SIZES } from '../../src/constants'

import type { ButtonProps } from '../../src'

export default {
  title: 'Elements/Button',
  component: Button,

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
      options: ['button', 'reset', 'submit'],
      control: { type: 'inline-radio' },
    },
  },

  args: {
    accent: Accent.PRIMARY,
    disabled: false,
    size: Size.MEDIUM,
    type: 'button',
  },
}

export const _Button = (props: ButtonProps) => <Button {...props}>Button</Button>
