import React from 'react'

import Icon from '../Icon'

const MaterialChatBubbleSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
  </svg>
)

const MaterialChatBubble = props => <Icon as={MaterialChatBubbleSvg} {...props} />

MaterialChatBubble.defaultProps = { ...Icon.defaultProps }

MaterialChatBubble.propTypes = { ...Icon.propTypes }

export default MaterialChatBubble