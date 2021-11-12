import React from 'react'

import Icon from '../Icon'

const MaterialLaptopWindowsSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 18v-1h1.99L22 3H2v14h2v1H0v2h24v-2h-4zM4 5h16v10H4V5z" />
  </svg>
)

const MaterialLaptopWindowsSharp = props => <Icon as={MaterialLaptopWindowsSharpSvg} {...props} />

MaterialLaptopWindowsSharp.defaultProps = { ...Icon.defaultProps }

MaterialLaptopWindowsSharp.propTypes = { ...Icon.propTypes }

export default MaterialLaptopWindowsSharp
