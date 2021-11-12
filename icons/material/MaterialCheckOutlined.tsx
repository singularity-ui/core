import React from 'react'

import Icon from '../Icon'

const MaterialCheckOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </svg>
)

const MaterialCheckOutlined = props => <Icon as={MaterialCheckOutlinedSvg} {...props} />

MaterialCheckOutlined.defaultProps = { ...Icon.defaultProps }

MaterialCheckOutlined.propTypes = { ...Icon.propTypes }

export default MaterialCheckOutlined
