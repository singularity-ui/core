import React from 'react'

import Icon from '../Icon'

const MaterialSignalCellularFourBarTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M2 22h20V2L2 22z" />
  </svg>
)

const MaterialSignalCellularFourBarTwoTone = props => <Icon as={MaterialSignalCellularFourBarTwoToneSvg} {...props} />

MaterialSignalCellularFourBarTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialSignalCellularFourBarTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialSignalCellularFourBarTwoTone
