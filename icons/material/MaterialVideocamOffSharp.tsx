import React from 'react'

import Icon from '../Icon'

const MaterialVideocamOffSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 16.61V6.5l-4 4V6h-6.61zM3.41 1.86L2 3.27 4.73 6H3v12h13.73l3 3 1.41-1.41z" />
  </svg>
)

const MaterialVideocamOffSharp = props => <Icon as={MaterialVideocamOffSharpSvg} {...props} />

MaterialVideocamOffSharp.defaultProps = { ...Icon.defaultProps }

MaterialVideocamOffSharp.propTypes = { ...Icon.propTypes }

export default MaterialVideocamOffSharp