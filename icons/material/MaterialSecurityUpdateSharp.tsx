import React from 'react'

import Icon from '../Icon'

const MaterialSecurityUpdateSharpSvg = props => (
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
      <path d="M5,1v22h14V1H5z M17,18H7V6h10V18z M16,12h-3V8h-2v4H8l4,4L16,12z" />
    </g>
  </svg>
)

const MaterialSecurityUpdateSharp = props => <Icon as={MaterialSecurityUpdateSharpSvg} {...props} />

MaterialSecurityUpdateSharp.defaultProps = { ...Icon.defaultProps }

MaterialSecurityUpdateSharp.propTypes = { ...Icon.propTypes }

export default MaterialSecurityUpdateSharp