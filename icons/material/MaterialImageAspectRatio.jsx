import React from 'react'

import Icon from '../Icon'

const MaterialImageAspectRatioSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M16 10h-2v2h2v-2zm0 4h-2v2h2v-2zm-8-4H6v2h2v-2zm4 0h-2v2h2v-2zm8-6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" />
  </svg>
)

const MaterialImageAspectRatio = props => <Icon as={MaterialImageAspectRatioSvg} {...props} />

MaterialImageAspectRatio.defaultProps = { ...Icon.defaultProps }

MaterialImageAspectRatio.propTypes = { ...Icon.propTypes }

export default MaterialImageAspectRatio