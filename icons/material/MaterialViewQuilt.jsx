import React from 'react'

import Icon from '../Icon'

const MaterialViewQuiltSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <g>
      <path d="M21,5v6.5H9.33V5H21z M14.67,19v-6.5H9.33V19H14.67z M15.67,12.5V19H21v-6.5H15.67z M8.33,19V5H3v14H8.33z" />
    </g>
  </svg>
)

const MaterialViewQuilt = props => <Icon as={MaterialViewQuiltSvg} {...props} />

MaterialViewQuilt.defaultProps = { ...Icon.defaultProps }

MaterialViewQuilt.propTypes = { ...Icon.propTypes }

export default MaterialViewQuilt
