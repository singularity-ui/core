import React from 'react'

import Icon from '../Icon'

const MaterialSignalWifiStatusbarFourBarSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <path d="M12,4C7.31,4,3.07,5.9,0,8.98L12,21L24,8.98C20.93,5.9,16.69,4,12,4z" />
    </g>
  </svg>
)

const MaterialSignalWifiStatusbarFourBarSharp = props => (
  <Icon as={MaterialSignalWifiStatusbarFourBarSharpSvg} {...props} />
)

MaterialSignalWifiStatusbarFourBarSharp.defaultProps = { ...Icon.defaultProps }

MaterialSignalWifiStatusbarFourBarSharp.propTypes = { ...Icon.propTypes }

export default MaterialSignalWifiStatusbarFourBarSharp
