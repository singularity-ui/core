import React from 'react'

import Icon from '../Icon'

const MaterialCenterFocusWeakOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm7 3c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm7-11h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z" />
  </svg>
)

const MaterialCenterFocusWeakOutlined = props => <Icon as={MaterialCenterFocusWeakOutlinedSvg} {...props} />

MaterialCenterFocusWeakOutlined.defaultProps = { ...Icon.defaultProps }

MaterialCenterFocusWeakOutlined.propTypes = { ...Icon.propTypes }

export default MaterialCenterFocusWeakOutlined