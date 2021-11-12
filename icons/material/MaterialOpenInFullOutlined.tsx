import React from 'react'

import Icon from '../Icon'

const MaterialOpenInFullOutlinedSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <polygon points="21,11 21,3 13,3 16.29,6.29 6.29,16.29 3,13 3,21 11,21 7.71,17.71 17.71,7.71" />
  </svg>
)

const MaterialOpenInFullOutlined = props => <Icon as={MaterialOpenInFullOutlinedSvg} {...props} />

MaterialOpenInFullOutlined.defaultProps = { ...Icon.defaultProps }

MaterialOpenInFullOutlined.propTypes = { ...Icon.propTypes }

export default MaterialOpenInFullOutlined
