import React from 'react'

import Icon from '../Icon'

const MaterialChatBubbleOutlineSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 2H2v20l4-4h16V2zm-2 14H6l-2 2V4h16v12z" />
  </svg>
)

const MaterialChatBubbleOutlineSharp = props => <Icon as={MaterialChatBubbleOutlineSharpSvg} {...props} />

MaterialChatBubbleOutlineSharp.defaultProps = { ...Icon.defaultProps }

MaterialChatBubbleOutlineSharp.propTypes = { ...Icon.propTypes }

export default MaterialChatBubbleOutlineSharp