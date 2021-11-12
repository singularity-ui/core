import React from 'react'

import Icon from '../Icon'

const MaterialVoiceChatSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 2H2.01L2 22l4-4h16V2zm-4 12l-4-3.2V14H6V6h8v3.2L18 6v8z" />
  </svg>
)

const MaterialVoiceChatSharp = props => <Icon as={MaterialVoiceChatSharpSvg} {...props} />

MaterialVoiceChatSharp.defaultProps = { ...Icon.defaultProps }

MaterialVoiceChatSharp.propTypes = { ...Icon.propTypes }

export default MaterialVoiceChatSharp
