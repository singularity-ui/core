import React from 'react'

import Icon from '../Icon'

const MaterialEMobiledataSvg = props => (
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
        <path d="M16,9V7H8v10h8v-2h-6v-2h6v-2h-6V9H16z" />
      </g>
    </g>
  </svg>
)

const MaterialEMobiledata = props => <Icon as={MaterialEMobiledataSvg} {...props} />

MaterialEMobiledata.defaultProps = { ...Icon.defaultProps }

MaterialEMobiledata.propTypes = { ...Icon.propTypes }

export default MaterialEMobiledata