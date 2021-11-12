import React from 'react'

import Icon from '../Icon'

const MaterialCallMadeSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" />
  </svg>
)

const MaterialCallMadeSharp = props => <Icon as={MaterialCallMadeSharpSvg} {...props} />

MaterialCallMadeSharp.defaultProps = { ...Icon.defaultProps }

MaterialCallMadeSharp.propTypes = { ...Icon.propTypes }

export default MaterialCallMadeSharp
