import React from 'react'

import Icon from '../Icon'

const MaterialNearMeSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
  </svg>
)

const MaterialNearMeSharp = props => <Icon as={MaterialNearMeSharpSvg} {...props} />

MaterialNearMeSharp.defaultProps = { ...Icon.defaultProps }

MaterialNearMeSharp.propTypes = { ...Icon.propTypes }

export default MaterialNearMeSharp
