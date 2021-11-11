import React from 'react'

import Icon from '../Icon'

const MaterialFilterThreeSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M23 1H5v18h18V1zm-2 16H7V3h14v14zM3 5H1v18h18v-2H3V5zm14 10V5h-6v2h4v2h-2v2h2v2h-4v2h6z" />
  </svg>
)

const MaterialFilterThreeSharp = props => <Icon as={MaterialFilterThreeSharpSvg} {...props} />

MaterialFilterThreeSharp.defaultProps = { ...Icon.defaultProps }

MaterialFilterThreeSharp.propTypes = { ...Icon.propTypes }

export default MaterialFilterThreeSharp
