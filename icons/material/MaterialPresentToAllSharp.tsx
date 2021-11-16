import React from 'react'

import Icon from '../Icon'

const MaterialPresentToAllSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M23 3H1v18h22V3zm-2 16.02H3V4.98h18v14.04zM10 12H8l4-4 4 4h-2v4h-4v-4z" />
  </svg>
)

const MaterialPresentToAllSharp = props => <Icon as={MaterialPresentToAllSharpSvg} {...props} />

MaterialPresentToAllSharp.defaultProps = { ...Icon.defaultProps }

MaterialPresentToAllSharp.propTypes = { ...Icon.propTypes }

export default MaterialPresentToAllSharp