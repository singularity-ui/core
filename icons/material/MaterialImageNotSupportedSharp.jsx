import React from 'react'

import Icon from '../Icon'

const MaterialImageNotSupportedSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" />
      <path d="M21.9,21.9l-8.49-8.49l0,0L3,3l0,0L2.1,2.1L0.69,3.51L3,5.83V21h15.17l2.31,2.31L21.9,21.9z M5,18l3.5-4.5l2.5,3.01 L12.17,15l3,3H5z M21,18.17L5.83,3H21V18.17z" />
    </g>
  </svg>
)

const MaterialImageNotSupportedSharp = props => <Icon as={MaterialImageNotSupportedSharpSvg} {...props} />

MaterialImageNotSupportedSharp.defaultProps = { ...Icon.defaultProps }

MaterialImageNotSupportedSharp.propTypes = { ...Icon.propTypes }

export default MaterialImageNotSupportedSharp