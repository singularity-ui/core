import React from 'react'

import Icon from '../Icon'

const MaterialPhotoSizeSelectActualSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M23 3H1v18h22V3zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z" />
  </svg>
)

const MaterialPhotoSizeSelectActualSharp = props => <Icon as={MaterialPhotoSizeSelectActualSharpSvg} {...props} />

MaterialPhotoSizeSelectActualSharp.defaultProps = { ...Icon.defaultProps }

MaterialPhotoSizeSelectActualSharp.propTypes = { ...Icon.propTypes }

export default MaterialPhotoSizeSelectActualSharp
