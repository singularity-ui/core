import React from 'react'

import Icon from '../Icon'

const MaterialLooksOneSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3H3v18h18V3zm-7 14h-2V9h-2V7h4v10z" />
  </svg>
)

const MaterialLooksOneSharp = props => <Icon as={MaterialLooksOneSharpSvg} {...props} />

MaterialLooksOneSharp.defaultProps = { ...Icon.defaultProps }

MaterialLooksOneSharp.propTypes = { ...Icon.propTypes }

export default MaterialLooksOneSharp
