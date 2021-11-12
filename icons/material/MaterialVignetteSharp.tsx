import React from 'react'

import Icon from '../Icon'

const MaterialVignetteSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M23 3H1v18h22V3zM12 18c-4.42 0-8-2.69-8-6s3.58-6 8-6 8 2.69 8 6-3.58 6-8 6z" />
  </svg>
)

const MaterialVignetteSharp = props => <Icon as={MaterialVignetteSharpSvg} {...props} />

MaterialVignetteSharp.defaultProps = { ...Icon.defaultProps }

MaterialVignetteSharp.propTypes = { ...Icon.propTypes }

export default MaterialVignetteSharp
