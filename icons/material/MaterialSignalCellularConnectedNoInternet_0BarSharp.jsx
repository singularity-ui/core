import React from 'react'

import Icon from '../Icon'

const MaterialSignalCellularConnectedNoInternet_0BarSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M20,18h2v-8h-2V18z M20,22h2v-2h-2V22z M18,20v2H2L22,2v6h-2V6.83L6.83,20H18z" />
  </svg>
)

const MaterialSignalCellularConnectedNoInternet_0BarSharp = props => (
  <Icon as={MaterialSignalCellularConnectedNoInternet_0BarSharpSvg} {...props} />
)

MaterialSignalCellularConnectedNoInternet_0BarSharp.defaultProps = { ...Icon.defaultProps }

MaterialSignalCellularConnectedNoInternet_0BarSharp.propTypes = { ...Icon.propTypes }

export default MaterialSignalCellularConnectedNoInternet_0BarSharp
