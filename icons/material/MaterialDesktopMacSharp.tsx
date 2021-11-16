import React from 'react'

import Icon from '../Icon'

const MaterialDesktopMacSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M23 2H1v16h9l-2 3v1h8v-1l-2-3h9V2zm-2 12H3V4h18v10z" />
  </svg>
)

const MaterialDesktopMacSharp = props => <Icon as={MaterialDesktopMacSharpSvg} {...props} />

MaterialDesktopMacSharp.defaultProps = { ...Icon.defaultProps }

MaterialDesktopMacSharp.propTypes = { ...Icon.propTypes }

export default MaterialDesktopMacSharp