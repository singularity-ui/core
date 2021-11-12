import React from 'react'

import Icon from '../Icon'

const MaterialSpaceBarSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M18 9v4H6V9H4v6h16V9h-2z" />
  </svg>
)

const MaterialSpaceBarSharp = props => <Icon as={MaterialSpaceBarSharpSvg} {...props} />

MaterialSpaceBarSharp.defaultProps = { ...Icon.defaultProps }

MaterialSpaceBarSharp.propTypes = { ...Icon.propTypes }

export default MaterialSpaceBarSharp
