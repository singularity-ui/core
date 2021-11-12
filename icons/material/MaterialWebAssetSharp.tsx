import React from 'react'

import Icon from '../Icon'

const MaterialWebAssetSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 4v16h18V4H3zm16 14H5V8h14v10z" />
  </svg>
)

const MaterialWebAssetSharp = props => <Icon as={MaterialWebAssetSharpSvg} {...props} />

MaterialWebAssetSharp.defaultProps = { ...Icon.defaultProps }

MaterialWebAssetSharp.propTypes = { ...Icon.propTypes }

export default MaterialWebAssetSharp
