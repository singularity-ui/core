import React from 'react'

import Icon from '../Icon'

const MaterialCropSquareSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 4H4v16h16V4zm-2 14H6V6h12v12z" />
  </svg>
)

const MaterialCropSquareSharp = props => <Icon as={MaterialCropSquareSharpSvg} {...props} />

MaterialCropSquareSharp.defaultProps = { ...Icon.defaultProps }

MaterialCropSquareSharp.propTypes = { ...Icon.propTypes }

export default MaterialCropSquareSharp
