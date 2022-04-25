import React from 'react'

import { Radio, SUI } from '../..'

import type { RadioProps } from '../..'

export default {
  title: 'Fields/Radio',
  component: Radio,

  argTypes: {
    defaultChecked: {
      control: { type: 'boolean' },
    },
    size: {
      options: SUI.SIZES,
      control: { type: 'inline-radio' },
    },
  },

  args: {
    defaultChecked: false,
    disabled: false,
    label: 'Choice A',
    letter: 'A',
    size: SUI.SIZE.MEDIUM,
  },
}

export const _Radio = (props: RadioProps) => <Radio {...props} />
