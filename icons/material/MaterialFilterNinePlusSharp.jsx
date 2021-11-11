import React from 'react'

import Icon from '../Icon'

const MaterialFilterNinePlusSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 5H1v18h18v-2H3V5zm11 9V6H9v5h3v1H9v2h5zm-3-5V8h1v1h-1zm12-8H5v18h18V1zm-2 8h-2V7h-2v2h-2v2h2v2h2v-2h2v6H7V3h14v6z" />
  </svg>
)

const MaterialFilterNinePlusSharp = props => <Icon as={MaterialFilterNinePlusSharpSvg} {...props} />

MaterialFilterNinePlusSharp.defaultProps = { ...Icon.defaultProps }

MaterialFilterNinePlusSharp.propTypes = { ...Icon.propTypes }

export default MaterialFilterNinePlusSharp