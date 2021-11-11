import React from 'react'

import Icon from '../Icon'

const MaterialFormatQuoteSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M5 17h3l2-4V7H4v6h3l-2 4zm10 0h3l2-4V7h-6v6h3l-2 4z" />
  </svg>
)

const MaterialFormatQuoteSharp = props => <Icon as={MaterialFormatQuoteSharpSvg} {...props} />

MaterialFormatQuoteSharp.defaultProps = { ...Icon.defaultProps }

MaterialFormatQuoteSharp.propTypes = { ...Icon.propTypes }

export default MaterialFormatQuoteSharp
