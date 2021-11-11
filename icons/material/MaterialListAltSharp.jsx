import React from 'react'

import Icon from '../Icon'

const MaterialListAltSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM3 3v18h18V3H3zm16 16H5V5h14v14z" />
  </svg>
)

const MaterialListAltSharp = props => <Icon as={MaterialListAltSharpSvg} {...props} />

MaterialListAltSharp.defaultProps = { ...Icon.defaultProps }

MaterialListAltSharp.propTypes = { ...Icon.propTypes }

export default MaterialListAltSharp
