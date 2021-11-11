import React from 'react'

import Icon from '../Icon'

const MaterialAddSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </svg>
)

const MaterialAddSharp = props => <Icon as={MaterialAddSharpSvg} {...props} />

MaterialAddSharp.defaultProps = { ...Icon.defaultProps }

MaterialAddSharp.propTypes = { ...Icon.propTypes }

export default MaterialAddSharp
