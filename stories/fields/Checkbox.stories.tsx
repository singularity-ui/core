import React from 'react'

import { Checkbox } from '../../src'
import { Size, SIZES } from '../../src/constants'

import type { CheckboxProps } from '../../src'

export default {
  title: 'Fields/Checkbox',
  component: Checkbox,

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
    label: 'Check it!',
    size: Size.MEDIUM,
  },
}

export const _Checkbox = (props: CheckboxProps) => <Checkbox {...props} />
