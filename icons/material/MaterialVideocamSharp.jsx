import React from 'react'

import Icon from '../Icon'

const MaterialVideocamSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17 10.5V6H3v12h14v-4.5l4 4v-11l-4 4z" />
  </svg>
)

const MaterialVideocamSharp = props => <Icon as={MaterialVideocamSharpSvg} {...props} />

MaterialVideocamSharp.defaultProps = { ...Icon.defaultProps }

MaterialVideocamSharp.propTypes = { ...Icon.propTypes }

export default MaterialVideocamSharp
