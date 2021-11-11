import React from 'react'

import Icon from '../Icon'

const MaterialKeyboardArrowUpSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" />
  </svg>
)

const MaterialKeyboardArrowUpSharp = props => <Icon as={MaterialKeyboardArrowUpSharpSvg} {...props} />

MaterialKeyboardArrowUpSharp.defaultProps = { ...Icon.defaultProps }

MaterialKeyboardArrowUpSharp.propTypes = { ...Icon.propTypes }

export default MaterialKeyboardArrowUpSharp
