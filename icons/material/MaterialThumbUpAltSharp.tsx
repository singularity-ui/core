import React from 'react'

import Icon from '../Icon'

const MaterialThumbUpAltSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
    <path d="M14.17 1L7 8.18V21h12.31L23 12.4V8h-8.31l1.12-5.38zM1 9h4v12H1z" />
  </svg>
)

const MaterialThumbUpAltSharp = props => <Icon as={MaterialThumbUpAltSharpSvg} {...props} />

MaterialThumbUpAltSharp.defaultProps = { ...Icon.defaultProps }

MaterialThumbUpAltSharp.propTypes = { ...Icon.propTypes }

export default MaterialThumbUpAltSharp
