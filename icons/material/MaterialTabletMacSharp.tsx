import React from 'react'

import Icon from '../Icon'

const MaterialTabletMacSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 0H2v24h19V0zm-9.5 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.5-4H4V3h15v16z" />
  </svg>
)

const MaterialTabletMacSharp = props => <Icon as={MaterialTabletMacSharpSvg} {...props} />

MaterialTabletMacSharp.defaultProps = { ...Icon.defaultProps }

MaterialTabletMacSharp.propTypes = { ...Icon.propTypes }

export default MaterialTabletMacSharp
