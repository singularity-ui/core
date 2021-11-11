import React from 'react'

import Icon from '../Icon'

const MaterialSdCardAlertSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 2H10L4 8v14h16V2zm-7 15h-2v-2h2v2zm0-4h-2V8h2v5z" />
  </svg>
)

const MaterialSdCardAlertSharp = props => <Icon as={MaterialSdCardAlertSharpSvg} {...props} />

MaterialSdCardAlertSharp.defaultProps = { ...Icon.defaultProps }

MaterialSdCardAlertSharp.propTypes = { ...Icon.propTypes }

export default MaterialSdCardAlertSharp
