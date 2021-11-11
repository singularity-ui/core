import React from 'react'

import Icon from '../Icon'

const MaterialLocalBarSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z" />
  </svg>
)

const MaterialLocalBarSharp = props => <Icon as={MaterialLocalBarSharpSvg} {...props} />

MaterialLocalBarSharp.defaultProps = { ...Icon.defaultProps }

MaterialLocalBarSharp.propTypes = { ...Icon.propTypes }

export default MaterialLocalBarSharp
