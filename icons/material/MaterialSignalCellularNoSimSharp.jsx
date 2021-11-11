import React from 'react'

import Icon from '../Icon'

const MaterialSignalCellularNoSimSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 3h-9L7.95 5.06 19 16.11zm-15.21.74L2.38 5.15 5 7.77V21h13.23l1.62 1.62 1.41-1.41z" />
  </svg>
)

const MaterialSignalCellularNoSimSharp = props => <Icon as={MaterialSignalCellularNoSimSharpSvg} {...props} />

MaterialSignalCellularNoSimSharp.defaultProps = { ...Icon.defaultProps }

MaterialSignalCellularNoSimSharp.propTypes = { ...Icon.propTypes }

export default MaterialSignalCellularNoSimSharp
