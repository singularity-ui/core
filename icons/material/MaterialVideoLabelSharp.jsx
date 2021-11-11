import React from 'react'

import Icon from '../Icon'

const MaterialVideoLabelSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M23 3H1v18h22V3zm-2 13H3V5h18v11z" />
  </svg>
)

const MaterialVideoLabelSharp = props => <Icon as={MaterialVideoLabelSharpSvg} {...props} />

MaterialVideoLabelSharp.defaultProps = { ...Icon.defaultProps }

MaterialVideoLabelSharp.propTypes = { ...Icon.propTypes }

export default MaterialVideoLabelSharp
