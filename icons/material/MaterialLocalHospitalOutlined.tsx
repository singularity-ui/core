import React from 'react'

import Icon from '../Icon'

const MaterialLocalHospitalOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-8.5-2h3v-3.5H17v-3h-3.5V7h-3v3.5H7v3h3.5z" />
  </svg>
)

const MaterialLocalHospitalOutlined = props => <Icon as={MaterialLocalHospitalOutlinedSvg} {...props} />

MaterialLocalHospitalOutlined.defaultProps = { ...Icon.defaultProps }

MaterialLocalHospitalOutlined.propTypes = { ...Icon.propTypes }

export default MaterialLocalHospitalOutlined
