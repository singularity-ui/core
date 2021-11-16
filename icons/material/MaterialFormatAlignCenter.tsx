import React from 'react'

import Icon from '../Icon'

const MaterialFormatAlignCenterSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z" />
  </svg>
)

const MaterialFormatAlignCenter = props => <Icon as={MaterialFormatAlignCenterSvg} {...props} />

MaterialFormatAlignCenter.defaultProps = { ...Icon.defaultProps }

MaterialFormatAlignCenter.propTypes = { ...Icon.propTypes }

export default MaterialFormatAlignCenter