import React from 'react'

import Icon from '../Icon'

const MaterialShortTextSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M4 9h16v2H4V9zm0 4h10v2H4v-2z" />
  </svg>
)

const MaterialShortTextSharp = props => <Icon as={MaterialShortTextSharpSvg} {...props} />

MaterialShortTextSharp.defaultProps = { ...Icon.defaultProps }

MaterialShortTextSharp.propTypes = { ...Icon.propTypes }

export default MaterialShortTextSharp
