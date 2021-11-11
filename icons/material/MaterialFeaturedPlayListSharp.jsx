import React from 'react'

import Icon from '../Icon'

const MaterialFeaturedPlayListSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M23 3H1v18h22V3zm-11 8H3V9h9v2zm0-4H3V5h9v2z" />
  </svg>
)

const MaterialFeaturedPlayListSharp = props => <Icon as={MaterialFeaturedPlayListSharpSvg} {...props} />

MaterialFeaturedPlayListSharp.defaultProps = { ...Icon.defaultProps }

MaterialFeaturedPlayListSharp.propTypes = { ...Icon.propTypes }

export default MaterialFeaturedPlayListSharp
