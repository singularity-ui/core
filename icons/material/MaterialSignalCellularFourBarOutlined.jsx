import React from 'react'

import Icon from '../Icon'

const MaterialSignalCellularFourBarOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M2 22h20V2L2 22z" />
  </svg>
)

const MaterialSignalCellularFourBarOutlined = props => <Icon as={MaterialSignalCellularFourBarOutlinedSvg} {...props} />

MaterialSignalCellularFourBarOutlined.defaultProps = { ...Icon.defaultProps }

MaterialSignalCellularFourBarOutlined.propTypes = { ...Icon.propTypes }

export default MaterialSignalCellularFourBarOutlined
