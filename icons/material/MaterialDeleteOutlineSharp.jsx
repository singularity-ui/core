import React from 'react'

import Icon from '../Icon'

const MaterialDeleteOutlineSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M6 21h12V7H6v14zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
  </svg>
)

const MaterialDeleteOutlineSharp = props => <Icon as={MaterialDeleteOutlineSharpSvg} {...props} />

MaterialDeleteOutlineSharp.defaultProps = { ...Icon.defaultProps }

MaterialDeleteOutlineSharp.propTypes = { ...Icon.propTypes }

export default MaterialDeleteOutlineSharp
