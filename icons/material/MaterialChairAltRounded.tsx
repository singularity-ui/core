import React from 'react'

import Icon from '../Icon'

const MaterialChairAltRoundedSvg = props => (
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
      <path d="M17,10c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2H7C5.9,3,5,3.9,5,5v3c0,1.1,0.9,2,2,2h1v2H7c-1.1,0-2,0.9-2,2v6 c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-2h10v2c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-6c0-1.1-0.9-2-2-2h-1v-2H17z M7,8V5h10v3 H7z M17,16H7v-2h10V16z M14,12h-4v-2h4V12z" />
    </g>
  </svg>
)

const MaterialChairAltRounded = props => <Icon as={MaterialChairAltRoundedSvg} {...props} />

MaterialChairAltRounded.defaultProps = { ...Icon.defaultProps }

MaterialChairAltRounded.propTypes = { ...Icon.propTypes }

export default MaterialChairAltRounded