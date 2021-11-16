import React from 'react'

import Icon from '../Icon'

const MaterialNoSimSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3.79 3.74L2.38 5.15l2.74 2.74-.12.12V21h13.27l1.58 1.62 1.41-1.41zM19 16.11V3h-8.99L7.95 5.06z" />
  </svg>
)

const MaterialNoSimSharp = props => <Icon as={MaterialNoSimSharpSvg} {...props} />

MaterialNoSimSharp.defaultProps = { ...Icon.defaultProps }

MaterialNoSimSharp.propTypes = { ...Icon.propTypes }

export default MaterialNoSimSharp