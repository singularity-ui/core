import React from 'react'

import Icon from '../Icon'

const MaterialFileCopySharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M16 1H2v16h2V3h12V1zm-1 4l6 6v12H6V5h9zm-1 7h5.5L14 6.5V12z" />
  </svg>
)

const MaterialFileCopySharp = props => <Icon as={MaterialFileCopySharpSvg} {...props} />

MaterialFileCopySharp.defaultProps = { ...Icon.defaultProps }

MaterialFileCopySharp.propTypes = { ...Icon.propTypes }

export default MaterialFileCopySharp
