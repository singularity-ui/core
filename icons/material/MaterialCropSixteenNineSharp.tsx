import React from 'react'

import Icon from '../Icon'

const MaterialCropSixteenNineSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 6H3v12h18V6zm-2 10H5V8h14v8z" />
  </svg>
)

const MaterialCropSixteenNineSharp = props => <Icon as={MaterialCropSixteenNineSharpSvg} {...props} />

MaterialCropSixteenNineSharp.defaultProps = { ...Icon.defaultProps }

MaterialCropSixteenNineSharp.propTypes = { ...Icon.propTypes }

export default MaterialCropSixteenNineSharp
