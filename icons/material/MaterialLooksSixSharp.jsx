import React from 'react'

import Icon from '../Icon'

const MaterialLooksSixSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M11 15h2v-2h-2v2zM21 3H3v18h18V3zm-6 6h-4v2h4v6H9V7h6v2z" />
  </svg>
)

const MaterialLooksSixSharp = props => <Icon as={MaterialLooksSixSharpSvg} {...props} />

MaterialLooksSixSharp.defaultProps = { ...Icon.defaultProps }

MaterialLooksSixSharp.propTypes = { ...Icon.propTypes }

export default MaterialLooksSixSharp
