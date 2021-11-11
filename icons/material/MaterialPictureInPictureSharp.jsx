import React from 'react'

import Icon from '../Icon'

const MaterialPictureInPictureSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 7h-8v6h8V7zm4-4H1v17.98h22V3zm-2 16.01H3V4.98h18v14.03z" />
  </svg>
)

const MaterialPictureInPictureSharp = props => <Icon as={MaterialPictureInPictureSharpSvg} {...props} />

MaterialPictureInPictureSharp.defaultProps = { ...Icon.defaultProps }

MaterialPictureInPictureSharp.propTypes = { ...Icon.propTypes }

export default MaterialPictureInPictureSharp
