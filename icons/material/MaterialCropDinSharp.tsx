import React from 'react'

import Icon from '../Icon'

const MaterialCropDinSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M21 3H3v18h18V3zm-2 16H5V5h14v14z" />
  </svg>
)

const MaterialCropDinSharp = props => <Icon as={MaterialCropDinSharpSvg} {...props} />

MaterialCropDinSharp.defaultProps = { ...Icon.defaultProps }

MaterialCropDinSharp.propTypes = { ...Icon.propTypes }

export default MaterialCropDinSharp
