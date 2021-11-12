import React from 'react'

import Icon from '../Icon'

const MaterialPaddingSharpSvg = props => (
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
      <path d="M3,3v18h18V3H3z M9,9H7V7h2V9z M13,9h-2V7h2V9z M17,9h-2V7h2V9z" />
    </g>
  </svg>
)

const MaterialPaddingSharp = props => <Icon as={MaterialPaddingSharpSvg} {...props} />

MaterialPaddingSharp.defaultProps = { ...Icon.defaultProps }

MaterialPaddingSharp.propTypes = { ...Icon.propTypes }

export default MaterialPaddingSharp
