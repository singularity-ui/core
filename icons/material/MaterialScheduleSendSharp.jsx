import React from 'react'

import Icon from '../Icon'

const MaterialScheduleSendSharpSvg = props => (
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
      <g>
        <path d="M17,10c0.1,0,0.19,0.01,0.28,0.01L3,4v6l8,2l-8,2v6l7-2.95c0-0.02,0-0.03,0-0.05C10,13.14,13.14,10,17,10z" />
        <path d="M17,12c-2.76,0-5,2.24-5,5s2.24,5,5,5c2.76,0,5-2.24,5-5S19.76,12,17,12z M18.65,19.35l-2.15-2.15V14h1v2.79l1.85,1.85 L18.65,19.35z" />
      </g>
    </g>
  </svg>
)

const MaterialScheduleSendSharp = props => <Icon as={MaterialScheduleSendSharpSvg} {...props} />

MaterialScheduleSendSharp.defaultProps = { ...Icon.defaultProps }

MaterialScheduleSendSharp.propTypes = { ...Icon.propTypes }

export default MaterialScheduleSendSharp