import React from 'react'

import Icon from '../Icon'

const MaterialCameraIndoorRoundedSvg = props => (
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
      <path d="M10.8,3.65l-6,4.5C4.3,8.53,4,9.12,4,9.75v9c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-9c0-0.63-0.3-1.22-0.8-1.6l-6-4.5 C12.49,3.12,11.51,3.12,10.8,3.65z M15.27,15.67L14,15v1c0,0.55-0.45,1-1,1H9c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h4 c0.55,0,1,0.45,1,1v1l1.27-0.67C15.6,12.15,16,12.39,16,12.77v2.46C16,15.61,15.6,15.85,15.27,15.67z" />
    </g>
  </svg>
)

const MaterialCameraIndoorRounded = props => <Icon as={MaterialCameraIndoorRoundedSvg} {...props} />

MaterialCameraIndoorRounded.defaultProps = { ...Icon.defaultProps }

MaterialCameraIndoorRounded.propTypes = { ...Icon.propTypes }

export default MaterialCameraIndoorRounded