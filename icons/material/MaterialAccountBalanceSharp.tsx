import React from 'react'

import Icon from '../Icon'

const MaterialAccountBalanceSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z" />
  </svg>
)

const MaterialAccountBalanceSharp = props => <Icon as={MaterialAccountBalanceSharpSvg} {...props} />

MaterialAccountBalanceSharp.defaultProps = { ...Icon.defaultProps }

MaterialAccountBalanceSharp.propTypes = { ...Icon.propTypes }

export default MaterialAccountBalanceSharp
