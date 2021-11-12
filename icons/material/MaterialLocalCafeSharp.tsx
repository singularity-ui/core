import React from 'react'

import Icon from '../Icon'

const MaterialLocalCafeSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 3H4v14h14v-7h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 5h-2V5h2v3zM2 21h18v-2H2v2z" />
  </svg>
)

const MaterialLocalCafeSharp = props => <Icon as={MaterialLocalCafeSharpSvg} {...props} />

MaterialLocalCafeSharp.defaultProps = { ...Icon.defaultProps }

MaterialLocalCafeSharp.propTypes = { ...Icon.propTypes }

export default MaterialLocalCafeSharp
