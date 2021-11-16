import React from 'react'

import Icon from '../Icon'

const MaterialDesktopWindowsOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z" />
  </svg>
)

const MaterialDesktopWindowsOutlined = props => <Icon as={MaterialDesktopWindowsOutlinedSvg} {...props} />

MaterialDesktopWindowsOutlined.defaultProps = { ...Icon.defaultProps }

MaterialDesktopWindowsOutlined.propTypes = { ...Icon.propTypes }

export default MaterialDesktopWindowsOutlined