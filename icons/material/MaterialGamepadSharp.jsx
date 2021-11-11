import React from 'react'

import Icon from '../Icon'

const MaterialGamepadSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z" />
  </svg>
)

const MaterialGamepadSharp = props => <Icon as={MaterialGamepadSharpSvg} {...props} />

MaterialGamepadSharp.defaultProps = { ...Icon.defaultProps }

MaterialGamepadSharp.propTypes = { ...Icon.propTypes }

export default MaterialGamepadSharp
