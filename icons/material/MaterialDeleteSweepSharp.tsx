import React from 'react'

import Icon from '../Icon'

const MaterialDeleteSweepSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15 16h4v2h-4v-2zm0-8h7v2h-7V8zm0 4h6v2h-6v-2zM3 20h10V8H3v12zM14 5h-3l-1-1H6L5 5H2v2h12V5z" />
  </svg>
)

const MaterialDeleteSweepSharp = props => <Icon as={MaterialDeleteSweepSharpSvg} {...props} />

MaterialDeleteSweepSharp.defaultProps = { ...Icon.defaultProps }

MaterialDeleteSweepSharp.propTypes = { ...Icon.propTypes }

export default MaterialDeleteSweepSharp
