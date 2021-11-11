import React from 'react'

import Icon from '../Icon'

const MaterialStayPrimaryPortraitSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5.01 1v22H19V1H5.01zM17 19H7V5h10v14z" />
  </svg>
)

const MaterialStayPrimaryPortraitSharp = props => <Icon as={MaterialStayPrimaryPortraitSharpSvg} {...props} />

MaterialStayPrimaryPortraitSharp.defaultProps = { ...Icon.defaultProps }

MaterialStayPrimaryPortraitSharp.propTypes = { ...Icon.propTypes }

export default MaterialStayPrimaryPortraitSharp
