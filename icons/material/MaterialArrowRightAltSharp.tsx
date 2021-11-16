import React from 'react'

import Icon from '../Icon'

const MaterialArrowRightAltSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
  </svg>
)

const MaterialArrowRightAltSharp = props => <Icon as={MaterialArrowRightAltSharpSvg} {...props} />

MaterialArrowRightAltSharp.defaultProps = { ...Icon.defaultProps }

MaterialArrowRightAltSharp.propTypes = { ...Icon.propTypes }

export default MaterialArrowRightAltSharp