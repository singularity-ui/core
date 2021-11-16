import React from 'react'

import Icon from '../Icon'

const MaterialSignalCellularAltSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17 4h3v16h-3V4zM5 14h3v6H5v-6zm6-5h3v11h-3V9z" />
  </svg>
)

const MaterialSignalCellularAltSharp = props => <Icon as={MaterialSignalCellularAltSharpSvg} {...props} />

MaterialSignalCellularAltSharp.defaultProps = { ...Icon.defaultProps }

MaterialSignalCellularAltSharp.propTypes = { ...Icon.propTypes }

export default MaterialSignalCellularAltSharp