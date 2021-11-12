import React from 'react'

import Icon from '../Icon'

const MaterialEventSeatSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4 21h3v-3h10v3h3v-6H4v6zm15-11h3v3h-3v-3zM2 10h3v3H2v-3zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z" />
  </svg>
)

const MaterialEventSeatSharp = props => <Icon as={MaterialEventSeatSharpSvg} {...props} />

MaterialEventSeatSharp.defaultProps = { ...Icon.defaultProps }

MaterialEventSeatSharp.propTypes = { ...Icon.propTypes }

export default MaterialEventSeatSharp
