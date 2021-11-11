import React from 'react'

import Icon from '../Icon'

const MaterialPhotoCameraSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <circle cx="12" cy="12" r="3" />
    <path d="M9 2L7.17 4H2v16h20V4h-5.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
  </svg>
)

const MaterialPhotoCameraSharp = props => <Icon as={MaterialPhotoCameraSharpSvg} {...props} />

MaterialPhotoCameraSharp.defaultProps = { ...Icon.defaultProps }

MaterialPhotoCameraSharp.propTypes = { ...Icon.propTypes }

export default MaterialPhotoCameraSharp
