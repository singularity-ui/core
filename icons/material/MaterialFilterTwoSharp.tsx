import React from 'react'

import Icon from '../Icon'

const MaterialFilterTwoSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 5H1v18h18v-2H3V5zm20-4H5v18h18V1zm-2 16H7V3h14v14zm-4-4h-4v-2h4V5h-6v2h4v2h-4v6h6v-2z" />
  </svg>
)

const MaterialFilterTwoSharp = props => <Icon as={MaterialFilterTwoSharpSvg} {...props} />

MaterialFilterTwoSharp.defaultProps = { ...Icon.defaultProps }

MaterialFilterTwoSharp.propTypes = { ...Icon.propTypes }

export default MaterialFilterTwoSharp