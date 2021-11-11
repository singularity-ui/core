import React from 'react'

import Icon from '../Icon'

const MaterialFilterFiveSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M23 1H5v18h18V1zm-2 16H7V3h14v14zM3 5H1v18h18v-2H3V5zm14 10V9h-4V7h4V5h-6v6h4v2h-4v2h6z" />
  </svg>
)

const MaterialFilterFiveSharp = props => <Icon as={MaterialFilterFiveSharpSvg} {...props} />

MaterialFilterFiveSharp.defaultProps = { ...Icon.defaultProps }

MaterialFilterFiveSharp.propTypes = { ...Icon.propTypes }

export default MaterialFilterFiveSharp