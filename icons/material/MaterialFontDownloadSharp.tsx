import React from 'react'

import Icon from '../Icon'

const MaterialFontDownloadSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M9.93 13.5h4.14L12 7.98 9.93 13.5zM22 2H2v20h20V2zm-6.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z" />
  </svg>
)

const MaterialFontDownloadSharp = props => <Icon as={MaterialFontDownloadSharpSvg} {...props} />

MaterialFontDownloadSharp.defaultProps = { ...Icon.defaultProps }

MaterialFontDownloadSharp.propTypes = { ...Icon.propTypes }

export default MaterialFontDownloadSharp
