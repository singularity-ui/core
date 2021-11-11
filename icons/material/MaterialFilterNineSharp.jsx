import React from 'react'

import Icon from '../Icon'

const MaterialFilterNineSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 5H1v18h18v-2H3V5zm20-4H5v18h18V1zm-2 16H7V3h14v14zM17 5h-6v6h4v2h-4v2h6V5zm-2 4h-2V7h2v2z" />
  </svg>
)

const MaterialFilterNineSharp = props => <Icon as={MaterialFilterNineSharpSvg} {...props} />

MaterialFilterNineSharp.defaultProps = { ...Icon.defaultProps }

MaterialFilterNineSharp.propTypes = { ...Icon.propTypes }

export default MaterialFilterNineSharp
