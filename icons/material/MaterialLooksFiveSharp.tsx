import React from 'react'

import Icon from '../Icon'

const MaterialLooksFiveSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3H3v18h18V3zm-6 6h-4v2h4v6H9v-2h4v-2H9V7h6v2z" />
  </svg>
)

const MaterialLooksFiveSharp = props => <Icon as={MaterialLooksFiveSharpSvg} {...props} />

MaterialLooksFiveSharp.defaultProps = { ...Icon.defaultProps }

MaterialLooksFiveSharp.propTypes = { ...Icon.propTypes }

export default MaterialLooksFiveSharp
