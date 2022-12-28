import React from 'react'

import { Radio } from '../../src'
import { Size, SIZES } from '../../src/constants'

import type { RadioProps } from '../../src'

export default {
  title: 'Fields/Radio',
  component: Radio,

  argTypes: {
    defaultChecked: {
      control: { type: 'boolean' },
    },
    size: {
      options: SIZES,
      control: { type: 'inline-radio' },
    },
  },

  args: {
    defaultChecked: false,
    disabled: false,
    label: 'Choice A',
    letter: 'A',
    size: Size.MEDIUM,
  },
}

export const _Radio = (props: RadioProps) => <Radio {...props} />
