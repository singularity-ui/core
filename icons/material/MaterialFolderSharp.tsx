import React from 'react'

import Icon from '../Icon'

const MaterialFolderSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 4H2v16h20V6H12l-2-2z" />
  </svg>
)

const MaterialFolderSharp = props => <Icon as={MaterialFolderSharpSvg} {...props} />

MaterialFolderSharp.defaultProps = { ...Icon.defaultProps }

MaterialFolderSharp.propTypes = { ...Icon.propTypes }

export default MaterialFolderSharp
