import React from 'react'

import Icon from '../Icon'

const MaterialStayPrimaryLandscapeSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M1 19h22V5H1v14zM19 7v10H5V7h14z" />
  </svg>
)

const MaterialStayPrimaryLandscapeSharp = props => <Icon as={MaterialStayPrimaryLandscapeSharpSvg} {...props} />

MaterialStayPrimaryLandscapeSharp.defaultProps = { ...Icon.defaultProps }

MaterialStayPrimaryLandscapeSharp.propTypes = { ...Icon.propTypes }

export default MaterialStayPrimaryLandscapeSharp
