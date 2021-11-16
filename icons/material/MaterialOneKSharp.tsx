import React from 'react'

import Icon from '../Icon'

const MaterialOneKSharpSvg = props => (
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
      <path d="M21,3H3v18h18V3z M10,15H8.5v-4.5H7V9h3V15z M17,15h-1.75l-1.75-2.25V15H12V9h1.5v2.25L15.25,9H17l-2.25,3L17,15z" />
    </g>
  </svg>
)

const MaterialOneKSharp = props => <Icon as={MaterialOneKSharpSvg} {...props} />

MaterialOneKSharp.defaultProps = { ...Icon.defaultProps }

MaterialOneKSharp.propTypes = { ...Icon.propTypes }

export default MaterialOneKSharp