import React from 'react'

import Icon from '../Icon'

const MaterialFiberPinSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5.5 10.5h2v1h-2v-1zM22 4H2v16h20V4zM9 13H5.5v2H4V9h5v4zm3.5 2H11V9h1.5v6zm7.5 0h-1.2l-2.55-3.5V15H15V9h1.25l2.5 3.5V9H20v6z" />
  </svg>
)

const MaterialFiberPinSharp = props => <Icon as={MaterialFiberPinSharpSvg} {...props} />

MaterialFiberPinSharp.defaultProps = { ...Icon.defaultProps }

MaterialFiberPinSharp.propTypes = { ...Icon.propTypes }

export default MaterialFiberPinSharp
