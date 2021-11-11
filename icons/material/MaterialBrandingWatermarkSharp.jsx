import React from 'react'

import Icon from '../Icon'

const MaterialBrandingWatermarkSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M23 3H1v18h22V3zm-2 16h-9v-6h9v6z" />
  </svg>
)

const MaterialBrandingWatermarkSharp = props => <Icon as={MaterialBrandingWatermarkSharpSvg} {...props} />

MaterialBrandingWatermarkSharp.defaultProps = { ...Icon.defaultProps }

MaterialBrandingWatermarkSharp.propTypes = { ...Icon.propTypes }

export default MaterialBrandingWatermarkSharp
