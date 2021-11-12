import React from 'react'

import Icon from '../Icon'

const MaterialVoiceChatOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zm-6-5.4l3 2.4V7l-3 2.4V7H7v6h7z" />
  </svg>
)

const MaterialVoiceChatOutlined = props => <Icon as={MaterialVoiceChatOutlinedSvg} {...props} />

MaterialVoiceChatOutlined.defaultProps = { ...Icon.defaultProps }

MaterialVoiceChatOutlined.propTypes = { ...Icon.propTypes }

export default MaterialVoiceChatOutlined
