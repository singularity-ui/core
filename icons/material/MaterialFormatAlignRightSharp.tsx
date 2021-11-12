import React from 'react'

import Icon from '../Icon'

const MaterialFormatAlignRightSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z" />
  </svg>
)

const MaterialFormatAlignRightSharp = props => <Icon as={MaterialFormatAlignRightSharpSvg} {...props} />

MaterialFormatAlignRightSharp.defaultProps = { ...Icon.defaultProps }

MaterialFormatAlignRightSharp.propTypes = { ...Icon.propTypes }

export default MaterialFormatAlignRightSharp
