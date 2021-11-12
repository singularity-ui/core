import React from 'react'

import Icon from '../Icon'

const MaterialVolumeMuteSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7 9v6h4l5 5V4l-5 5H7z" />
  </svg>
)

const MaterialVolumeMuteSharp = props => <Icon as={MaterialVolumeMuteSharpSvg} {...props} />

MaterialVolumeMuteSharp.defaultProps = { ...Icon.defaultProps }

MaterialVolumeMuteSharp.propTypes = { ...Icon.propTypes }

export default MaterialVolumeMuteSharp
