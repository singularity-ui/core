import React from 'react'

import Icon from '../Icon'

const MaterialSmsFailedSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 2H2v20l4-4h16V2zm-9 12h-2v-2h2v2zm0-4h-2V6h2v4z" />
  </svg>
)

const MaterialSmsFailedSharp = props => <Icon as={MaterialSmsFailedSharpSvg} {...props} />

MaterialSmsFailedSharp.defaultProps = { ...Icon.defaultProps }

MaterialSmsFailedSharp.propTypes = { ...Icon.propTypes }

export default MaterialSmsFailedSharp