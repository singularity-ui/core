import React from 'react'

import Icon from '../Icon'

const MaterialArrowBackIosNewOutlinedSvg = props => (
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
      <polygon points="17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12" />
    </g>
  </svg>
)

const MaterialArrowBackIosNewOutlined = props => <Icon as={MaterialArrowBackIosNewOutlinedSvg} {...props} />

MaterialArrowBackIosNewOutlined.defaultProps = { ...Icon.defaultProps }

MaterialArrowBackIosNewOutlined.propTypes = { ...Icon.propTypes }

export default MaterialArrowBackIosNewOutlined
