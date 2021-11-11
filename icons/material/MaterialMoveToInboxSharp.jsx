import React from 'react'

import Icon from '../Icon'

const MaterialMoveToInboxSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3H3v18h18V3zm-2 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z" />
  </svg>
)

const MaterialMoveToInboxSharp = props => <Icon as={MaterialMoveToInboxSharpSvg} {...props} />

MaterialMoveToInboxSharp.defaultProps = { ...Icon.defaultProps }

MaterialMoveToInboxSharp.propTypes = { ...Icon.propTypes }

export default MaterialMoveToInboxSharp
