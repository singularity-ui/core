import React from 'react'

import Icon from '../Icon'

const MaterialSevenKSharpSvg = props => (
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
      <path d="M21,3H3v18h18V3z M9.5,15H7.75l1.38-4.5H6.5V9h4.86L9.5,15z M18,15h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25,9H18l-2.25,3 L18,15z" />
    </g>
  </svg>
)

const MaterialSevenKSharp = props => <Icon as={MaterialSevenKSharpSvg} {...props} />

MaterialSevenKSharp.defaultProps = { ...Icon.defaultProps }

MaterialSevenKSharp.propTypes = { ...Icon.propTypes }

export default MaterialSevenKSharp