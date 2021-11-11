import React from 'react'

import Icon from '../Icon'

const MaterialAutoAwesomeMosaicSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 5v14c0 1.1.89 2 2 2h6V3H5c-1.11 0-2 .9-2 2zm16-2h-6v8h8V5c0-1.1-.9-2-2-2zm-6 18h6c1.1 0 2-.9 2-2v-6h-8v8z" />
  </svg>
)

const MaterialAutoAwesomeMosaic = props => <Icon as={MaterialAutoAwesomeMosaicSvg} {...props} />

MaterialAutoAwesomeMosaic.defaultProps = { ...Icon.defaultProps }

MaterialAutoAwesomeMosaic.propTypes = { ...Icon.propTypes }

export default MaterialAutoAwesomeMosaic
