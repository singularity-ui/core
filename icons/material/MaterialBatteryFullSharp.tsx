import React from 'react'

import Icon from '../Icon'

const MaterialBatteryFullSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17 4h-3V2h-4v2H7v18h10V4z" />
  </svg>
)

const MaterialBatteryFullSharp = props => <Icon as={MaterialBatteryFullSharpSvg} {...props} />

MaterialBatteryFullSharp.defaultProps = { ...Icon.defaultProps }

MaterialBatteryFullSharp.propTypes = { ...Icon.propTypes }

export default MaterialBatteryFullSharp
