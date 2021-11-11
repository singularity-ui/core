import React from 'react'

import Icon from '../Icon'

const MaterialHourglassDisabledSvg = props => (
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
        <polygon points="8,4 16,4 16,7.5 13.16,10.34 14.41,11.59 18,8.01 17.99,8 18,8 18,2 6,2 6,3.17 8,5.17" />
        <path d="M2.1,2.1L0.69,3.51l8.9,8.9L6,16l0.01,0.01H6V22h12v-1.17l2.49,2.49l1.41-1.41L2.1,2.1z M16,20H8v-3.5l2.84-2.84L16,18.83 V20z" />
      </g>
    </g>
  </svg>
)

const MaterialHourglassDisabled = props => <Icon as={MaterialHourglassDisabledSvg} {...props} />

MaterialHourglassDisabled.defaultProps = { ...Icon.defaultProps }

MaterialHourglassDisabled.propTypes = { ...Icon.propTypes }

export default MaterialHourglassDisabled