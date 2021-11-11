import React from 'react'

import Icon from '../Icon'

const MaterialEjectSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 24V0h24v24H0z" fill="none" />
    <path d="M5 17h14v2H5zm7-12L5.33 15h13.34z" />
  </svg>
)

const MaterialEject = props => <Icon as={MaterialEjectSvg} {...props} />

MaterialEject.defaultProps = { ...Icon.defaultProps }

MaterialEject.propTypes = { ...Icon.propTypes }

export default MaterialEject
