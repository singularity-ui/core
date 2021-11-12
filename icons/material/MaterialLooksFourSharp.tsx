import React from 'react'

import Icon from '../Icon'

const MaterialLooksFourSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M.04 0h24v24h-24V0z" fill="none" />
    <path d="M21.04 3h-18v18h18V3zm-6 14h-2v-4h-4V7h2v4h2V7h2v10z" />
  </svg>
)

const MaterialLooksFourSharp = props => <Icon as={MaterialLooksFourSharpSvg} {...props} />

MaterialLooksFourSharp.defaultProps = { ...Icon.defaultProps }

MaterialLooksFourSharp.propTypes = { ...Icon.propTypes }

export default MaterialLooksFourSharp
