import React from 'react'

import Icon from '../Icon'

const MaterialDescriptionSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M14 2H4v20h16V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
  </svg>
)

const MaterialDescriptionSharp = props => <Icon as={MaterialDescriptionSharpSvg} {...props} />

MaterialDescriptionSharp.defaultProps = { ...Icon.defaultProps }

MaterialDescriptionSharp.propTypes = { ...Icon.propTypes }

export default MaterialDescriptionSharp
