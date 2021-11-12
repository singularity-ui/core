import React from 'react'

import Icon from '../Icon'

const MaterialSendToMobileSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <g>
        <polygon points="17,18 7,18 7,6 17,6 17,7 19,7 19,1 5,1 5,23 19,23 19,17 17,17" />
        <polygon points="22,12 18,8 18,11 13,11 13,13 18,13 18,16" />
      </g>
    </g>
  </svg>
)

const MaterialSendToMobileSharp = props => <Icon as={MaterialSendToMobileSharpSvg} {...props} />

MaterialSendToMobileSharp.defaultProps = { ...Icon.defaultProps }

MaterialSendToMobileSharp.propTypes = { ...Icon.propTypes }

export default MaterialSendToMobileSharp
