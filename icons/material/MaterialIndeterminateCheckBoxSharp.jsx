import React from 'react'

import Icon from '../Icon'

const MaterialIndeterminateCheckBoxSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M21 3H3v18h18V3zm-4 10H7v-2h10v2z" />
  </svg>
)

const MaterialIndeterminateCheckBoxSharp = props => <Icon as={MaterialIndeterminateCheckBoxSharpSvg} {...props} />

MaterialIndeterminateCheckBoxSharp.defaultProps = { ...Icon.defaultProps }

MaterialIndeterminateCheckBoxSharp.propTypes = { ...Icon.propTypes }

export default MaterialIndeterminateCheckBoxSharp
