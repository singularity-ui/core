import React from 'react'

import Icon from '../Icon'

const MaterialKeyboardReturnSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z" />
  </svg>
)

const MaterialKeyboardReturnSharp = props => <Icon as={MaterialKeyboardReturnSharpSvg} {...props} />

MaterialKeyboardReturnSharp.defaultProps = { ...Icon.defaultProps }

MaterialKeyboardReturnSharp.propTypes = { ...Icon.propTypes }

export default MaterialKeyboardReturnSharp