import React from 'react'

import Icon from '../Icon'

const MaterialFormatSizeOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z" />
  </svg>
)

const MaterialFormatSizeOutlined = props => <Icon as={MaterialFormatSizeOutlinedSvg} {...props} />

MaterialFormatSizeOutlined.defaultProps = { ...Icon.defaultProps }

MaterialFormatSizeOutlined.propTypes = { ...Icon.propTypes }

export default MaterialFormatSizeOutlined
