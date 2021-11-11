import React from 'react'

import Icon from '../Icon'

const MaterialExplicitSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3H3v18h18V3zm-6 6h-4v2h4v2h-4v2h4v2H9V7h6v2z" />
  </svg>
)

const MaterialExplicitSharp = props => <Icon as={MaterialExplicitSharpSvg} {...props} />

MaterialExplicitSharp.defaultProps = { ...Icon.defaultProps }

MaterialExplicitSharp.propTypes = { ...Icon.propTypes }

export default MaterialExplicitSharp
