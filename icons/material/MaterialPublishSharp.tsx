import React from 'react'

import Icon from '../Icon'

const MaterialPublishSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z" />
  </svg>
)

const MaterialPublishSharp = props => <Icon as={MaterialPublishSharpSvg} {...props} />

MaterialPublishSharp.defaultProps = { ...Icon.defaultProps }

MaterialPublishSharp.propTypes = { ...Icon.propTypes }

export default MaterialPublishSharp
