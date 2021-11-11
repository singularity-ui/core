import React from 'react'

import Icon from '../Icon'

const MaterialCheckBoxOutlineBlankSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 5v14H5V5h14m2-2H3v18h18V3z" />
  </svg>
)

const MaterialCheckBoxOutlineBlankSharp = props => <Icon as={MaterialCheckBoxOutlineBlankSharpSvg} {...props} />

MaterialCheckBoxOutlineBlankSharp.defaultProps = { ...Icon.defaultProps }

MaterialCheckBoxOutlineBlankSharp.propTypes = { ...Icon.propTypes }

export default MaterialCheckBoxOutlineBlankSharp
