import React from 'react'

import Icon from '../Icon'

const MaterialLogoutSharpSvg = props => (
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
        <polygon points="5,5 12,5 12,3 3,3 3,21 12,21 12,19 5,19" />
        <polygon points="21,12 17,8 17,11 9,11 9,13 17,13 17,16" />
      </g>
    </g>
  </svg>
)

const MaterialLogoutSharp = props => <Icon as={MaterialLogoutSharpSvg} {...props} />

MaterialLogoutSharp.defaultProps = { ...Icon.defaultProps }

MaterialLogoutSharp.propTypes = { ...Icon.propTypes }

export default MaterialLogoutSharp