import React from 'react'

import Icon from '../Icon'

const MaterialCasesSharpSvg = props => (
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
      <path d="M18,5V1h-8v4H5v13h18V5H18z M16,5h-4V3h4V5z M3,9H1v13h18v-2H3V9z" />
    </g>
  </svg>
)

const MaterialCasesSharp = props => <Icon as={MaterialCasesSharpSvg} {...props} />

MaterialCasesSharp.defaultProps = { ...Icon.defaultProps }

MaterialCasesSharp.propTypes = { ...Icon.propTypes }

export default MaterialCasesSharp
