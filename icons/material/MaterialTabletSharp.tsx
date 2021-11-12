import React from 'react'

import Icon from '../Icon'

const MaterialTabletSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M23 4H1v16h21.99L23 4zm-4 14H5V6h14v12z" />
  </svg>
)

const MaterialTabletSharp = props => <Icon as={MaterialTabletSharpSvg} {...props} />

MaterialTabletSharp.defaultProps = { ...Icon.defaultProps }

MaterialTabletSharp.propTypes = { ...Icon.propTypes }

export default MaterialTabletSharp
