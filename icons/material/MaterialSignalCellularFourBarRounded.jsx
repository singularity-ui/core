import React from 'react'

import Icon from '../Icon'

const MaterialSignalCellularFourBarRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4.41 22H20c1.1 0 2-.9 2-2V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71z" />
  </svg>
)

const MaterialSignalCellularFourBarRounded = props => <Icon as={MaterialSignalCellularFourBarRoundedSvg} {...props} />

MaterialSignalCellularFourBarRounded.defaultProps = { ...Icon.defaultProps }

MaterialSignalCellularFourBarRounded.propTypes = { ...Icon.propTypes }

export default MaterialSignalCellularFourBarRounded
