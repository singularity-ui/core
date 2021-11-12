import React from 'react'

import Icon from '../Icon'

const MaterialFilterFramesSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M22 4h-6l-4-4-4 4H2v18h20V4zm-2 16H4V6h4.52l3.52-3.5L15.52 6H20v14zM18 8H6v10h12" />
  </svg>
)

const MaterialFilterFramesSharp = props => <Icon as={MaterialFilterFramesSharpSvg} {...props} />

MaterialFilterFramesSharp.defaultProps = { ...Icon.defaultProps }

MaterialFilterFramesSharp.propTypes = { ...Icon.propTypes }

export default MaterialFilterFramesSharp
