import React from 'react'

import Icon from '../Icon'

const MaterialSupportAgentSharpSvg = props => (
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
        <circle cx="9" cy="13" r="1" />
        <circle cx="15" cy="13" r="1" />
        <path d="M18,11.03C17.52,8.18,15.04,6,12.05,6c-3.03,0-6.29,2.51-6.03,6.45c2.47-1.01,4.33-3.21,4.86-5.89 C12.19,9.19,14.88,11,18,11.03z" />
        <path d="M20.99,12C20.88,6.63,16.68,3,12,3c-4.61,0-8.85,3.53-8.99,9H2v6h3v-5.81c0-3.83,2.95-7.18,6.78-7.29 c3.96-0.12,7.22,3.06,7.22,7V19h-8v2h10v-3h1v-6H20.99z" />
      </g>
    </g>
  </svg>
)

const MaterialSupportAgentSharp = props => <Icon as={MaterialSupportAgentSharpSvg} {...props} />

MaterialSupportAgentSharp.defaultProps = { ...Icon.defaultProps }

MaterialSupportAgentSharp.propTypes = { ...Icon.propTypes }

export default MaterialSupportAgentSharp