import React from 'react'

import { Tag } from '../../src'
import { Accent, ACCENTS, Size, SIZES } from '../../src/constants'

import type { TagProps } from '../../src'

export default {
  title: 'Elements/Tag',
  component: Tag,

  argTypes: {
    accent: {
      options: ACCENTS,
      control: { type: 'inline-radio' },
    },
    size: {
      options: SIZES,
      control: { type: 'inline-radio' },
    },
  },

  args: {
    accent: Accent.PRIMARY,
    size: Size.MEDIUM,
  },
}

export const _Tag = (props: TagProps) => <Tag {...props}>Apple</Tag>
