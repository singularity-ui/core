import React from 'react'

import Icon from '../Icon'

const MaterialFeaturedVideoSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M23 3H1v18h22V3zm-11 9H3V5h9v7z" />
  </svg>
)

const MaterialFeaturedVideoSharp = props => <Icon as={MaterialFeaturedVideoSharpSvg} {...props} />

MaterialFeaturedVideoSharp.defaultProps = { ...Icon.defaultProps }

MaterialFeaturedVideoSharp.propTypes = { ...Icon.propTypes }

export default MaterialFeaturedVideoSharp
