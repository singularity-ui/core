import React from 'react'

import Icon from '../Icon'

const MaterialLiveTvSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M23 6h-9.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H1v16h22V6zm-2 14H3V8h18v12zM9 10v8l7-4-7-4z" />
  </svg>
)

const MaterialLiveTvSharp = props => <Icon as={MaterialLiveTvSharpSvg} {...props} />

MaterialLiveTvSharp.defaultProps = { ...Icon.defaultProps }

MaterialLiveTvSharp.propTypes = { ...Icon.propTypes }

export default MaterialLiveTvSharp