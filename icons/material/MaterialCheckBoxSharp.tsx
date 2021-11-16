import React from 'react'

import Icon from '../Icon'

const MaterialCheckBoxSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3H3v18h18V3zM10 17l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
)

const MaterialCheckBoxSharp = props => <Icon as={MaterialCheckBoxSharpSvg} {...props} />

MaterialCheckBoxSharp.defaultProps = { ...Icon.defaultProps }

MaterialCheckBoxSharp.propTypes = { ...Icon.propTypes }

export default MaterialCheckBoxSharp