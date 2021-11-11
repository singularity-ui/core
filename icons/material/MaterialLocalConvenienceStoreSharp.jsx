import React from 'react'

import Icon from '../Icon'

const MaterialLocalConvenienceStoreSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 7V4H5v3H2v13h8v-4h4v4h8V7h-3zm-8 3H9v1h2v1H8V9h2V8H8V7h3v3zm5 2h-1v-2h-2V7h1v2h1V7h1v5z" />
  </svg>
)

const MaterialLocalConvenienceStoreSharp = props => <Icon as={MaterialLocalConvenienceStoreSharpSvg} {...props} />

MaterialLocalConvenienceStoreSharp.defaultProps = { ...Icon.defaultProps }

MaterialLocalConvenienceStoreSharp.propTypes = { ...Icon.propTypes }

export default MaterialLocalConvenienceStoreSharp
