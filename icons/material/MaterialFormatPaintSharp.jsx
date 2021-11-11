import React from 'react'

import Icon from '../Icon'

const MaterialFormatPaintSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M18 4V2H4v6h14V6h1v4H9v12h4V12h8V4h-3z" />
  </svg>
)

const MaterialFormatPaintSharp = props => <Icon as={MaterialFormatPaintSharpSvg} {...props} />

MaterialFormatPaintSharp.defaultProps = { ...Icon.defaultProps }

MaterialFormatPaintSharp.propTypes = { ...Icon.propTypes }

export default MaterialFormatPaintSharp
