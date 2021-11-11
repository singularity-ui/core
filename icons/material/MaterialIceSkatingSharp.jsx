import React from 'react'

import Icon from '../Icon'

const MaterialIceSkatingSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <g>
      <path d="M21,17c0,1.66-1.34,3-3,3h-2v-2h3l-0.01-6l-5.71-1.43C12.4,10.35,11.7,9.76,11.32,9H8V8h3.02L11,7H8V6h3V3H3v15h3v2H2v2h16 c2.76,0,5-2.24,5-5H21z M14,20H8v-2h6V20z" />
    </g>
  </svg>
)

const MaterialIceSkatingSharp = props => <Icon as={MaterialIceSkatingSharpSvg} {...props} />

MaterialIceSkatingSharp.defaultProps = { ...Icon.defaultProps }

MaterialIceSkatingSharp.propTypes = { ...Icon.propTypes }

export default MaterialIceSkatingSharp
