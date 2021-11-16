import React from 'react'

import Icon from '../Icon'

const MaterialKeyboardArrowRightSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
  </svg>
)

const MaterialKeyboardArrowRightSharp = props => <Icon as={MaterialKeyboardArrowRightSharpSvg} {...props} />

MaterialKeyboardArrowRightSharp.defaultProps = { ...Icon.defaultProps }

MaterialKeyboardArrowRightSharp.propTypes = { ...Icon.propTypes }

export default MaterialKeyboardArrowRightSharp