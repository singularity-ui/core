import React from 'react'

import Icon from '../Icon'

const MaterialRMobiledataSharpSvg = props => (
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
        <path d="M7.8,7.2L9,10H7L5.87,7.33H4V10H2V2h7v5.2H7.8z M7,4H4v1.33h3V4z" />
      </g>
    </g>
  </svg>
)

const MaterialRMobiledataSharp = props => <Icon as={MaterialRMobiledataSharpSvg} {...props} />

MaterialRMobiledataSharp.defaultProps = { ...Icon.defaultProps }

MaterialRMobiledataSharp.propTypes = { ...Icon.propTypes }

export default MaterialRMobiledataSharp