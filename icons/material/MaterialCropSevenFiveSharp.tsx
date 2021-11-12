import React from 'react'

import Icon from '../Icon'

const MaterialCropSevenFiveSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 7H3v10h18V7zm-2 8H5V9h14v6z" />
  </svg>
)

const MaterialCropSevenFiveSharp = props => <Icon as={MaterialCropSevenFiveSharpSvg} {...props} />

MaterialCropSevenFiveSharp.defaultProps = { ...Icon.defaultProps }

MaterialCropSevenFiveSharp.propTypes = { ...Icon.propTypes }

export default MaterialCropSevenFiveSharp
