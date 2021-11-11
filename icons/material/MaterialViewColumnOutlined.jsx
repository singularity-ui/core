import React from 'react'

import Icon from '../Icon'

const MaterialViewColumnOutlinedSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M3,5v14h18V5H3z M8.33,17H5V7h3.33V17z M13.67,17h-3.33V7h3.33V17z M19,17h-3.33V7H19V17z" />
  </svg>
)

const MaterialViewColumnOutlined = props => <Icon as={MaterialViewColumnOutlinedSvg} {...props} />

MaterialViewColumnOutlined.defaultProps = { ...Icon.defaultProps }

MaterialViewColumnOutlined.propTypes = { ...Icon.propTypes }

export default MaterialViewColumnOutlined