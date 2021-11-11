import React from 'react'

import Icon from '../Icon'

const MaterialDesktopWindowsSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M23 2H1v16h9v2H8v2h8v-2h-2v-2h9V2zm-2 14H3V4h18v12z" />
  </svg>
)

const MaterialDesktopWindowsSharp = props => <Icon as={MaterialDesktopWindowsSharpSvg} {...props} />

MaterialDesktopWindowsSharp.defaultProps = { ...Icon.defaultProps }

MaterialDesktopWindowsSharp.propTypes = { ...Icon.propTypes }

export default MaterialDesktopWindowsSharp