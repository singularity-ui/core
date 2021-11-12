import React from 'react'

import Icon from '../Icon'

const MaterialSensorWindowSharpSvg = props => (
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
      <path d="M18,4v16H6V4H18 M4,2v20h16V2H4z M7,19h10v-6H7V19z M10,10h4v1h3V5H7v6h3V10z" />
    </g>
  </svg>
)

const MaterialSensorWindowSharp = props => <Icon as={MaterialSensorWindowSharpSvg} {...props} />

MaterialSensorWindowSharp.defaultProps = { ...Icon.defaultProps }

MaterialSensorWindowSharp.propTypes = { ...Icon.propTypes }

export default MaterialSensorWindowSharp
