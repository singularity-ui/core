import React from 'react'

import Icon from '../Icon'

const MaterialSignalCellularFourBarSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M2 22h20V2z" />
  </svg>
)

const MaterialSignalCellularFourBar = props => <Icon as={MaterialSignalCellularFourBarSvg} {...props} />

MaterialSignalCellularFourBar.defaultProps = { ...Icon.defaultProps }

MaterialSignalCellularFourBar.propTypes = { ...Icon.propTypes }

export default MaterialSignalCellularFourBar
