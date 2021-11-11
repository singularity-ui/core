import React from 'react'

import Icon from '../Icon'

const MaterialFilterBAndWSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3H3v18h18V3zm-2 16l-7-8v8H5l7-8V5h7v14z" />
  </svg>
)

const MaterialFilterBAndWSharp = props => <Icon as={MaterialFilterBAndWSharpSvg} {...props} />

MaterialFilterBAndWSharp.defaultProps = { ...Icon.defaultProps }

MaterialFilterBAndWSharp.propTypes = { ...Icon.propTypes }

export default MaterialFilterBAndWSharp
