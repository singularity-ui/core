import React from 'react'

import Icon from '../Icon'

const MaterialCropLandscapeSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 5H3v14h18V5zm-2 12H5V7h14v10z" />
  </svg>
)

const MaterialCropLandscapeSharp = props => <Icon as={MaterialCropLandscapeSharpSvg} {...props} />

MaterialCropLandscapeSharp.defaultProps = { ...Icon.defaultProps }

MaterialCropLandscapeSharp.propTypes = { ...Icon.propTypes }

export default MaterialCropLandscapeSharp
