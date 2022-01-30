import React from 'react'

import { SUI, Tag } from '../..'

import type { TagProps } from '../..'

export default {
  title: 'Elements/Tag',
  component: Tag,

  argTypes: {
    accent: {
      options: SUI.ACCENTS,
      control: { type: 'inline-radio' },
    },
    size: {
      options: SUI.SIZES,
      control: { type: 'inline-radio' },
    },
  },

  args: {
    accent: SUI.ACCENT.PRIMARY,
    size: SUI.SIZE.MEDIUM,
  },
}

export const _Tag = (props: TagProps) => <Tag {...props}>Apple</Tag>
