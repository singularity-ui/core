import React from 'react'

import Icon from '../Icon'

const MaterialFilterFourSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 5H1v18h18v-2H3V5zm12 10h2V5h-2v4h-2V5h-2v6h4v4zm8-14H5v18h18V1zm-2 16H7V3h14v14z" />
  </svg>
)

const MaterialFilterFourSharp = props => <Icon as={MaterialFilterFourSharpSvg} {...props} />

MaterialFilterFourSharp.defaultProps = { ...Icon.defaultProps }

MaterialFilterFourSharp.propTypes = { ...Icon.propTypes }

export default MaterialFilterFourSharp
