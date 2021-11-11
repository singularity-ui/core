import React from 'react'

import Icon from '../Icon'

const MaterialSwitchAccountSharpSvg = props => (
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
      <path d="M4,6H2v16h16v-2H4V6z M6,2v16h16V2H6z M14,5c1.66,0,3,1.34,3,3c0,1.66-1.34,3-3,3s-3-1.34-3-3C11,6.34,12.34,5,14,5z M7.76,16c1.47-1.83,3.71-3,6.24-3s4.77,1.17,6.24,3H7.76z" />
    </g>
  </svg>
)

const MaterialSwitchAccountSharp = props => <Icon as={MaterialSwitchAccountSharpSvg} {...props} />

MaterialSwitchAccountSharp.defaultProps = { ...Icon.defaultProps }

MaterialSwitchAccountSharp.propTypes = { ...Icon.propTypes }

export default MaterialSwitchAccountSharp