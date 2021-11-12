import React from 'react'

import Icon from '../Icon'

const MaterialArrowBackOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
  </svg>
)

const MaterialArrowBackOutlined = props => <Icon as={MaterialArrowBackOutlinedSvg} {...props} />

MaterialArrowBackOutlined.defaultProps = { ...Icon.defaultProps }

MaterialArrowBackOutlined.propTypes = { ...Icon.propTypes }

export default MaterialArrowBackOutlined
