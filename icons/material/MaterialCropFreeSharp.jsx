import React from 'react'

import Icon from '../Icon'

const MaterialCropFreeSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 3v6h2V5h4V3H3zm2 12H3v6h6v-2H5v-4zm14 4h-4v2h6v-6h-2v4zm2-16h-6v2h4v4h2V3z" />
  </svg>
)

const MaterialCropFreeSharp = props => <Icon as={MaterialCropFreeSharpSvg} {...props} />

MaterialCropFreeSharp.defaultProps = { ...Icon.defaultProps }

MaterialCropFreeSharp.propTypes = { ...Icon.propTypes }

export default MaterialCropFreeSharp
