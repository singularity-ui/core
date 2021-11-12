import React from 'react'

import Icon from '../Icon'

const MaterialWebAssetOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H5V8h14v10z" />
  </svg>
)

const MaterialWebAssetOutlined = props => <Icon as={MaterialWebAssetOutlinedSvg} {...props} />

MaterialWebAssetOutlined.defaultProps = { ...Icon.defaultProps }

MaterialWebAssetOutlined.propTypes = { ...Icon.propTypes }

export default MaterialWebAssetOutlined
