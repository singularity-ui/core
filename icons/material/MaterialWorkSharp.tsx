import React from 'react'

import Icon from '../Icon'

const MaterialWorkSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 6h-6V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H2v15h20V6zm-8 0h-4V4h4v2z" />
  </svg>
)

const MaterialWorkSharp = props => <Icon as={MaterialWorkSharpSvg} {...props} />

MaterialWorkSharp.defaultProps = { ...Icon.defaultProps }

MaterialWorkSharp.propTypes = { ...Icon.propTypes }

export default MaterialWorkSharp
