import React from 'react'

import Icon from '../Icon'

const MaterialEventSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17 13h-5v5h5v-5zM16 2v2H8V2H6v2H3.01L3 22h18V4h-3V2h-2zm3 18H5V9h14v11z" />
  </svg>
)

const MaterialEventSharp = props => <Icon as={MaterialEventSharpSvg} {...props} />

MaterialEventSharp.defaultProps = { ...Icon.defaultProps }

MaterialEventSharp.propTypes = { ...Icon.propTypes }

export default MaterialEventSharp
