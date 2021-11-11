import React from 'react'

import Icon from '../Icon'

const MaterialStayCurrentPortraitSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 1.01L5.01 1v22H19V1.01zM17 19H7V5h10v14z" />
  </svg>
)

const MaterialStayCurrentPortraitSharp = props => <Icon as={MaterialStayCurrentPortraitSharpSvg} {...props} />

MaterialStayCurrentPortraitSharp.defaultProps = { ...Icon.defaultProps }

MaterialStayCurrentPortraitSharp.propTypes = { ...Icon.propTypes }

export default MaterialStayCurrentPortraitSharp