import React from 'react'

import Icon from '../Icon'

const MaterialFormatIndentDecreaseOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z" />
  </svg>
)

const MaterialFormatIndentDecreaseOutlined = props => <Icon as={MaterialFormatIndentDecreaseOutlinedSvg} {...props} />

MaterialFormatIndentDecreaseOutlined.defaultProps = { ...Icon.defaultProps }

MaterialFormatIndentDecreaseOutlined.propTypes = { ...Icon.propTypes }

export default MaterialFormatIndentDecreaseOutlined
