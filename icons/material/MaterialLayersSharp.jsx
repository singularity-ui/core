import React from 'react'

import Icon from '../Icon'

const MaterialLayersSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" />
  </svg>
)

const MaterialLayersSharp = props => <Icon as={MaterialLayersSharpSvg} {...props} />

MaterialLayersSharp.defaultProps = { ...Icon.defaultProps }

MaterialLayersSharp.propTypes = { ...Icon.propTypes }

export default MaterialLayersSharp
