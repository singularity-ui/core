import React from 'react'

import Icon from '../Icon'

const MaterialStopSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M6 6h12v12H6V6z" />
  </svg>
)

const MaterialStopSharp = props => <Icon as={MaterialStopSharpSvg} {...props} />

MaterialStopSharp.defaultProps = { ...Icon.defaultProps }

MaterialStopSharp.propTypes = { ...Icon.propTypes }

export default MaterialStopSharp
