import React from 'react'

import Icon from '../Icon'

const MaterialMinimizeSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M6 19h12v2H6v-2z" />
  </svg>
)

const MaterialMinimizeSharp = props => <Icon as={MaterialMinimizeSharpSvg} {...props} />

MaterialMinimizeSharp.defaultProps = { ...Icon.defaultProps }

MaterialMinimizeSharp.propTypes = { ...Icon.propTypes }

export default MaterialMinimizeSharp
