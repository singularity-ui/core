import React from 'react'

import Icon from '../Icon'

const MaterialFormatStrikethroughOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z" />
  </svg>
)

const MaterialFormatStrikethroughOutlined = props => <Icon as={MaterialFormatStrikethroughOutlinedSvg} {...props} />

MaterialFormatStrikethroughOutlined.defaultProps = { ...Icon.defaultProps }

MaterialFormatStrikethroughOutlined.propTypes = { ...Icon.propTypes }

export default MaterialFormatStrikethroughOutlined
