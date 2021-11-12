import React from 'react'

import Icon from '../Icon'

const MaterialCropThreeTwoSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 4H3v16h18V4zm-2 14H5V6h14v12z" />
  </svg>
)

const MaterialCropThreeTwoSharp = props => <Icon as={MaterialCropThreeTwoSharpSvg} {...props} />

MaterialCropThreeTwoSharp.defaultProps = { ...Icon.defaultProps }

MaterialCropThreeTwoSharp.propTypes = { ...Icon.propTypes }

export default MaterialCropThreeTwoSharp
