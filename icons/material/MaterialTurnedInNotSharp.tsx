import React from 'react'

import Icon from '../Icon'

const MaterialTurnedInNotSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 3H5.01L5 21l7-3 7 3V3zm-2 15l-5-2.18L7 18V5h10v13z" />
  </svg>
)

const MaterialTurnedInNotSharp = props => <Icon as={MaterialTurnedInNotSharpSvg} {...props} />

MaterialTurnedInNotSharp.defaultProps = { ...Icon.defaultProps }

MaterialTurnedInNotSharp.propTypes = { ...Icon.propTypes }

export default MaterialTurnedInNotSharp