import React from 'react'

import Icon from '../Icon'

const MaterialInboxSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3H3.01v18H21V3zm-2 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H5V5h14v10z" />
  </svg>
)

const MaterialInboxSharp = props => <Icon as={MaterialInboxSharpSvg} {...props} />

MaterialInboxSharp.defaultProps = { ...Icon.defaultProps }

MaterialInboxSharp.propTypes = { ...Icon.propTypes }

export default MaterialInboxSharp
