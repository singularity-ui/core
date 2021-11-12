import React from 'react'

import Icon from '../Icon'

const MaterialWorkOutlineSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm18-2v15H2.01V6H8V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2h6z" />
  </svg>
)

const MaterialWorkOutlineSharp = props => <Icon as={MaterialWorkOutlineSharpSvg} {...props} />

MaterialWorkOutlineSharp.defaultProps = { ...Icon.defaultProps }

MaterialWorkOutlineSharp.propTypes = { ...Icon.propTypes }

export default MaterialWorkOutlineSharp
