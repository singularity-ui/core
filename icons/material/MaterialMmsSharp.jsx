import React from 'react'

import Icon from '../Icon'

const MaterialMmsSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 2H2v20l4-4h16V2zM5 14l3.5-4.5 2.5 3.01L14.5 8l4.5 6H5z" />
  </svg>
)

const MaterialMmsSharp = props => <Icon as={MaterialMmsSharpSvg} {...props} />

MaterialMmsSharp.defaultProps = { ...Icon.defaultProps }

MaterialMmsSharp.propTypes = { ...Icon.propTypes }

export default MaterialMmsSharp
