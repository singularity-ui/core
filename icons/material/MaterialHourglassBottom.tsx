import React from 'react'

import Icon from '../Icon'

const MaterialHourglassBottomSvg = props => (
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
      <path d="M18,22l-0.01-6L14,12l3.99-4.01L18,2H6v6l4,4l-4,3.99V22H18z M8,7.5V4h8v3.5l-4,4L8,7.5z" />
    </g>
  </svg>
)

const MaterialHourglassBottom = props => <Icon as={MaterialHourglassBottomSvg} {...props} />

MaterialHourglassBottom.defaultProps = { ...Icon.defaultProps }

MaterialHourglassBottom.propTypes = { ...Icon.propTypes }

export default MaterialHourglassBottom