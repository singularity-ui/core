import React from 'react'

import Icon from '../Icon'

const MaterialBatteryAlertSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17 4h-3V2h-4v2H7v18h10V4zm-4 14h-2v-2h2v2zm0-4h-2V9h2v5z" />
  </svg>
)

const MaterialBatteryAlertSharp = props => <Icon as={MaterialBatteryAlertSharpSvg} {...props} />

MaterialBatteryAlertSharp.defaultProps = { ...Icon.defaultProps }

MaterialBatteryAlertSharp.propTypes = { ...Icon.propTypes }

export default MaterialBatteryAlertSharp