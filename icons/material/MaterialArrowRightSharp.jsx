import React from 'react'

import Icon from '../Icon'

const MaterialArrowRightSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 17l5-5-5-5v10z" />
  </svg>
)

const MaterialArrowRightSharp = props => <Icon as={MaterialArrowRightSharpSvg} {...props} />

MaterialArrowRightSharp.defaultProps = { ...Icon.defaultProps }

MaterialArrowRightSharp.propTypes = { ...Icon.propTypes }

export default MaterialArrowRightSharp
