import React from 'react'

import { Checkbox, SUI } from '../..'

import type { CheckboxProps } from '../..'

export default {
  title: 'Fields/Checkbox',
  component: Checkbox,

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
    label: 'Check it!',
    size: SUI.SIZE.MEDIUM,
  },
}

export const _Checkbox = (props: CheckboxProps) => <Checkbox {...props} />
