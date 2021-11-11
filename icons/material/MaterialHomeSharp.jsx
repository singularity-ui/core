import React from 'react'

import Icon from '../Icon'

const MaterialHomeSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" />
  </svg>
)

const MaterialHomeSharp = props => <Icon as={MaterialHomeSharpSvg} {...props} />

MaterialHomeSharp.defaultProps = { ...Icon.defaultProps }

MaterialHomeSharp.propTypes = { ...Icon.propTypes }

export default MaterialHomeSharp
