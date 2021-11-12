import React from 'react'

import Icon from '../Icon'

const MaterialAddBoxSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3H3v18h18V3zm-4 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
  </svg>
)

const MaterialAddBoxSharp = props => <Icon as={MaterialAddBoxSharpSvg} {...props} />

MaterialAddBoxSharp.defaultProps = { ...Icon.defaultProps }

MaterialAddBoxSharp.propTypes = { ...Icon.propTypes }

export default MaterialAddBoxSharp
