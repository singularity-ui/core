import React from 'react'

import Icon from '../Icon'

const MaterialSingleBedSharpSvg = props => (
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
    </g>
    <g>
      <path d="M18,10V5H6v5H4v7h1.33L6,19h1l0.67-2h8.67L17,19h1l0.67-2H20v-7H18z M11,10H8V7h3V10z M16,10h-3V7h3V10z" />
    </g>
  </svg>
)

const MaterialSingleBedSharp = props => <Icon as={MaterialSingleBedSharpSvg} {...props} />

MaterialSingleBedSharp.defaultProps = { ...Icon.defaultProps }

MaterialSingleBedSharp.propTypes = { ...Icon.propTypes }

export default MaterialSingleBedSharp
