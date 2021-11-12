import React from 'react'

import Icon from '../Icon'

const MaterialCropPortraitSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 3H5v18h14V3zm-2 16H7V5h10v14z" />
  </svg>
)

const MaterialCropPortraitSharp = props => <Icon as={MaterialCropPortraitSharpSvg} {...props} />

MaterialCropPortraitSharp.defaultProps = { ...Icon.defaultProps }

MaterialCropPortraitSharp.propTypes = { ...Icon.propTypes }

export default MaterialCropPortraitSharp
