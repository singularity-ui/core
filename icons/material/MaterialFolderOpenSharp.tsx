import React from 'react'

import Icon from '../Icon'

const MaterialFolderOpenSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 6H12l-2-2H2v16h20V6zm-2 12H4V8h16v10z" />
  </svg>
)

const MaterialFolderOpenSharp = props => <Icon as={MaterialFolderOpenSharpSvg} {...props} />

MaterialFolderOpenSharp.defaultProps = { ...Icon.defaultProps }

MaterialFolderOpenSharp.propTypes = { ...Icon.propTypes }

export default MaterialFolderOpenSharp
