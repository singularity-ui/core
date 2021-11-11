import React from 'react'

import Icon from '../Icon'

const MaterialShortTextOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M4 9h16v2H4V9zm0 4h10v2H4v-2z" />
  </svg>
)

const MaterialShortTextOutlined = props => <Icon as={MaterialShortTextOutlinedSvg} {...props} />

MaterialShortTextOutlined.defaultProps = { ...Icon.defaultProps }

MaterialShortTextOutlined.propTypes = { ...Icon.propTypes }

export default MaterialShortTextOutlined
