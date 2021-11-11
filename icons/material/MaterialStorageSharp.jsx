import React from 'react'

import Icon from '../Icon'

const MaterialStorageSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z" />
  </svg>
)

const MaterialStorageSharp = props => <Icon as={MaterialStorageSharpSvg} {...props} />

MaterialStorageSharp.defaultProps = { ...Icon.defaultProps }

MaterialStorageSharp.propTypes = { ...Icon.propTypes }

export default MaterialStorageSharp
