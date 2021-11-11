import React from 'react'

import Icon from '../Icon'

const MaterialBusinessCenterSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 16v-1H3.01v6H21v-6h-7v1h-4zm12-9h-6V5l-2-2h-4L8 5v2H2v7h8v-2h4v2h8V7zm-8 0h-4V5h4v2z" />
  </svg>
)

const MaterialBusinessCenterSharp = props => <Icon as={MaterialBusinessCenterSharpSvg} {...props} />

MaterialBusinessCenterSharp.defaultProps = { ...Icon.defaultProps }

MaterialBusinessCenterSharp.propTypes = { ...Icon.propTypes }

export default MaterialBusinessCenterSharp