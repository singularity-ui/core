import React from 'react'

import Icon from '../Icon'

const MaterialFormatUnderlinedTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5 19h14v2H5zM6 3v8c0 3.31 2.69 6 6 6s6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6z" />
  </svg>
)

const MaterialFormatUnderlinedTwoTone = props => <Icon as={MaterialFormatUnderlinedTwoToneSvg} {...props} />

MaterialFormatUnderlinedTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialFormatUnderlinedTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialFormatUnderlinedTwoTone