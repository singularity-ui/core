import React from 'react'

import Icon from '../Icon'

const MaterialFlashlightOffSvg = props => (
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
        <polygon points="18,5 18,2 6,2 6,3.17 7.83,5" />
        <polygon points="16,11 18,8 18,7 9.83,7 16,13.17" />
        <path d="M2.81,2.81L1.39,4.22L8,10.83V22h8v-3.17l3.78,3.78l1.41-1.41L2.81,2.81z" />
      </g>
    </g>
  </svg>
)

const MaterialFlashlightOff = props => <Icon as={MaterialFlashlightOffSvg} {...props} />

MaterialFlashlightOff.defaultProps = { ...Icon.defaultProps }

MaterialFlashlightOff.propTypes = { ...Icon.propTypes }

export default MaterialFlashlightOff