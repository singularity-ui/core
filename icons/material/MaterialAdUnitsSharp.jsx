import React from 'react'

import Icon from '../Icon'

const MaterialAdUnitsSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" x="0" />
      <g>
        <path d="M19,1H5v22h14V1z M17,19H7V5h10V19z" />
        <rect height="2" width="8" x="8" y="6" />
      </g>
    </g>
  </svg>
)

const MaterialAdUnitsSharp = props => <Icon as={MaterialAdUnitsSharpSvg} {...props} />

MaterialAdUnitsSharp.defaultProps = { ...Icon.defaultProps }

MaterialAdUnitsSharp.propTypes = { ...Icon.propTypes }

export default MaterialAdUnitsSharp