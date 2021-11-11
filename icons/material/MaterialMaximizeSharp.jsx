import React from 'react'

import Icon from '../Icon'

const MaterialMaximizeSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 3h18v2H3V3z" />
  </svg>
)

const MaterialMaximizeSharp = props => <Icon as={MaterialMaximizeSharpSvg} {...props} />

MaterialMaximizeSharp.defaultProps = { ...Icon.defaultProps }

MaterialMaximizeSharp.propTypes = { ...Icon.propTypes }

export default MaterialMaximizeSharp
