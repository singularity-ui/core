import React from 'react'

import Icon from '../Icon'

const MaterialFormatIndentIncreaseOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z" />
  </svg>
)

const MaterialFormatIndentIncreaseOutlined = props => <Icon as={MaterialFormatIndentIncreaseOutlinedSvg} {...props} />

MaterialFormatIndentIncreaseOutlined.defaultProps = { ...Icon.defaultProps }

MaterialFormatIndentIncreaseOutlined.propTypes = { ...Icon.propTypes }

export default MaterialFormatIndentIncreaseOutlined
