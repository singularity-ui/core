import React from 'react'

import Icon from '../Icon'

const MaterialFunctionsSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7V4z" />
  </svg>
)

const MaterialFunctionsSharp = props => <Icon as={MaterialFunctionsSharpSvg} {...props} />

MaterialFunctionsSharp.defaultProps = { ...Icon.defaultProps }

MaterialFunctionsSharp.propTypes = { ...Icon.propTypes }

export default MaterialFunctionsSharp
