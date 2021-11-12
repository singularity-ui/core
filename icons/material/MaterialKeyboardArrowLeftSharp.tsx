import React from 'react'

import Icon from '../Icon'

const MaterialKeyboardArrowLeftSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
  </svg>
)

const MaterialKeyboardArrowLeftSharp = props => <Icon as={MaterialKeyboardArrowLeftSharpSvg} {...props} />

MaterialKeyboardArrowLeftSharp.defaultProps = { ...Icon.defaultProps }

MaterialKeyboardArrowLeftSharp.propTypes = { ...Icon.propTypes }

export default MaterialKeyboardArrowLeftSharp
