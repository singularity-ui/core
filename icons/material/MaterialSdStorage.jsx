import React from 'react'

import Icon from '../Icon'

const MaterialSdStorageSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z" />
  </svg>
)

const MaterialSdStorage = props => <Icon as={MaterialSdStorageSvg} {...props} />

MaterialSdStorage.defaultProps = { ...Icon.defaultProps }

MaterialSdStorage.propTypes = { ...Icon.propTypes }

export default MaterialSdStorage