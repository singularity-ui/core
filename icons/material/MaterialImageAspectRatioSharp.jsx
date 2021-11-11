import React from 'react'

import Icon from '../Icon'

const MaterialImageAspectRatioSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M16 10h-2v2h2v-2zm0 4h-2v2h2v-2zm-8-4H6v2h2v-2zm4 0h-2v2h2v-2zm10-6H2v16h20V4zm-2 14H4V6h16v12z" />
  </svg>
)

const MaterialImageAspectRatioSharp = props => <Icon as={MaterialImageAspectRatioSharpSvg} {...props} />

MaterialImageAspectRatioSharp.defaultProps = { ...Icon.defaultProps }

MaterialImageAspectRatioSharp.propTypes = { ...Icon.propTypes }

export default MaterialImageAspectRatioSharp
