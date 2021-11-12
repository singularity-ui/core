import React from 'react'

import Icon from '../Icon'

const MaterialFilterNoneSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 5H1v18h18v-2H3V5zm20-4H5v18h18V1zm-2 16H7V3h14v14z" />
  </svg>
)

const MaterialFilterNoneSharp = props => <Icon as={MaterialFilterNoneSharpSvg} {...props} />

MaterialFilterNoneSharp.defaultProps = { ...Icon.defaultProps }

MaterialFilterNoneSharp.propTypes = { ...Icon.propTypes }

export default MaterialFilterNoneSharp
