import React from 'react'

import Icon from '../Icon'

const MaterialAccountBoxSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 21h18V3H3v18zM15 9c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z" />
  </svg>
)

const MaterialAccountBoxSharp = props => <Icon as={MaterialAccountBoxSharpSvg} {...props} />

MaterialAccountBoxSharp.defaultProps = { ...Icon.defaultProps }

MaterialAccountBoxSharp.propTypes = { ...Icon.propTypes }

export default MaterialAccountBoxSharp
