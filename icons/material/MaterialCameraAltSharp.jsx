import React from 'react'

import Icon from '../Icon'

const MaterialCameraAltSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <circle cx="12" cy="12" r="3" />
    <path d="M16.83 4L15 2H9L7.17 4H2v16h20V4h-5.17zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
  </svg>
)

const MaterialCameraAltSharp = props => <Icon as={MaterialCameraAltSharpSvg} {...props} />

MaterialCameraAltSharp.defaultProps = { ...Icon.defaultProps }

MaterialCameraAltSharp.propTypes = { ...Icon.propTypes }

export default MaterialCameraAltSharp