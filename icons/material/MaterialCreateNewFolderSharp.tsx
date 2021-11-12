import React from 'react'

import Icon from '../Icon'

const MaterialCreateNewFolderSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 6H12l-2-2H2v16h20V6zm-3 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z" />
  </svg>
)

const MaterialCreateNewFolderSharp = props => <Icon as={MaterialCreateNewFolderSharpSvg} {...props} />

MaterialCreateNewFolderSharp.defaultProps = { ...Icon.defaultProps }

MaterialCreateNewFolderSharp.propTypes = { ...Icon.propTypes }

export default MaterialCreateNewFolderSharp
