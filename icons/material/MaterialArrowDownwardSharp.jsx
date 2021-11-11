import React from 'react'

import Icon from '../Icon'

const MaterialArrowDownwardSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
  </svg>
)

const MaterialArrowDownwardSharp = props => <Icon as={MaterialArrowDownwardSharpSvg} {...props} />

MaterialArrowDownwardSharp.defaultProps = { ...Icon.defaultProps }

MaterialArrowDownwardSharp.propTypes = { ...Icon.propTypes }

export default MaterialArrowDownwardSharp
