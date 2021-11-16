import React from 'react'

import Icon from '../Icon'

const MaterialEscalatorSharpSvg = props => (
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
      <g>
        <path d="M21,3H3v18h18L21,3z M18.5,9h-3.2l-5,9H5.5v-3h3.2l5-9h4.8V9z" />
      </g>
    </g>
  </svg>
)

const MaterialEscalatorSharp = props => <Icon as={MaterialEscalatorSharpSvg} {...props} />

MaterialEscalatorSharp.defaultProps = { ...Icon.defaultProps }

MaterialEscalatorSharp.propTypes = { ...Icon.propTypes }

export default MaterialEscalatorSharp