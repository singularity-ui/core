import React from 'react'

import { SIZE, SIZES } from '../../common/constants'
import SingularityTextInput from '../../fields/TextInput'

export default {
  title: 'Fields/Text Input',
  component: SingularityTextInput,

  argTypes: {
    size: {
      options: SIZES,
      control: { type: 'inline-radio' },
    },
  },

  args: {
    size: SIZE.MEDIUM,
  },

  // parameters: {
  //   docs: {
  //     source: {
  //       code: `
  //         import TextInput from '@singularity/core/TextInput

  //         <TextInput placeholder=Text Input" />
  //       `,
  //     },
  //   },
  // },
}

export const TextInput = props => <SingularityTextInput {...props} placeholder="Text Input" />
