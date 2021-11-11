import React from 'react'

import Icon from '../Icon'

const MaterialSdCardSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 2H10L4 8v14h16V2zm-8 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z" />
  </svg>
)

const MaterialSdCardSharp = props => <Icon as={MaterialSdCardSharpSvg} {...props} />

MaterialSdCardSharp.defaultProps = { ...Icon.defaultProps }

MaterialSdCardSharp.propTypes = { ...Icon.propTypes }

export default MaterialSdCardSharp
