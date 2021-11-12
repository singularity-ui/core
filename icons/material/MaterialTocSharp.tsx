import React from 'react'

import Icon from '../Icon'

const MaterialTocSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
    <path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2zM3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z" />
  </svg>
)

const MaterialTocSharp = props => <Icon as={MaterialTocSharpSvg} {...props} />

MaterialTocSharp.defaultProps = { ...Icon.defaultProps }

MaterialTocSharp.propTypes = { ...Icon.propTypes }

export default MaterialTocSharp
