import React from 'react'

import Icon from '../Icon'

const MaterialRepeatSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z" />
  </svg>
)

const MaterialRepeatSharp = props => <Icon as={MaterialRepeatSharpSvg} {...props} />

MaterialRepeatSharp.defaultProps = { ...Icon.defaultProps }

MaterialRepeatSharp.propTypes = { ...Icon.propTypes }

export default MaterialRepeatSharp
