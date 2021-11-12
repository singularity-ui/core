import React from 'react'

import Icon from '../Icon'

const MaterialCropSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17 15h2V5H9v2h8v8zM7 17V1H5v4H1v2h4v12h12v4h2v-4h4v-2H7z" />
  </svg>
)

const MaterialCropSharp = props => <Icon as={MaterialCropSharpSvg} {...props} />

MaterialCropSharp.defaultProps = { ...Icon.defaultProps }

MaterialCropSharp.propTypes = { ...Icon.propTypes }

export default MaterialCropSharp
