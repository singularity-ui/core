import React from 'react'

import Icon from '../Icon'

const MaterialWarningOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </svg>
)

const MaterialWarningOutlined = props => <Icon as={MaterialWarningOutlinedSvg} {...props} />

MaterialWarningOutlined.defaultProps = { ...Icon.defaultProps }

MaterialWarningOutlined.propTypes = { ...Icon.propTypes }

export default MaterialWarningOutlined
