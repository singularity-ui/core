import React from 'react'

import Icon from '../Icon'

const MaterialWebAssetRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-1 14H6c-.55 0-1-.45-1-1V8h14v9c0 .55-.45 1-1 1z" />
  </svg>
)

const MaterialWebAssetRounded = props => <Icon as={MaterialWebAssetRoundedSvg} {...props} />

MaterialWebAssetRounded.defaultProps = { ...Icon.defaultProps }

MaterialWebAssetRounded.propTypes = { ...Icon.propTypes }

export default MaterialWebAssetRounded
