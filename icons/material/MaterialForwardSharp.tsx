import React from 'react'

import Icon from '../Icon'

const MaterialForwardSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 8V4l8 8-8 8v-4H4V8h8z" />
  </svg>
)

const MaterialForwardSharp = props => <Icon as={MaterialForwardSharpSvg} {...props} />

MaterialForwardSharp.defaultProps = { ...Icon.defaultProps }

MaterialForwardSharp.propTypes = { ...Icon.propTypes }

export default MaterialForwardSharp
