import React from 'react'

import Icon from '../Icon'

const MaterialFeedbackOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z" />
  </svg>
)

const MaterialFeedbackOutlined = props => <Icon as={MaterialFeedbackOutlinedSvg} {...props} />

MaterialFeedbackOutlined.defaultProps = { ...Icon.defaultProps }

MaterialFeedbackOutlined.propTypes = { ...Icon.propTypes }

export default MaterialFeedbackOutlined