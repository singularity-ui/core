import React from 'react'

import Icon from '../Icon'

const MaterialTitleSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M5 4v3h5.5v12h3V7H19V4H5z" />
  </svg>
)

const MaterialTitleSharp = props => <Icon as={MaterialTitleSharpSvg} {...props} />

MaterialTitleSharp.defaultProps = { ...Icon.defaultProps }

MaterialTitleSharp.propTypes = { ...Icon.propTypes }

export default MaterialTitleSharp
