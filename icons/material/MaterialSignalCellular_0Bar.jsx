import React from 'react'

import Icon from '../Icon'

const MaterialSignalCellular_0BarSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M20,6.83V20H6.83L20,6.83 M22,2L2,22h20V2L22,2z" />
  </svg>
)

const MaterialSignalCellular_0Bar = props => <Icon as={MaterialSignalCellular_0BarSvg} {...props} />

MaterialSignalCellular_0Bar.defaultProps = { ...Icon.defaultProps }

MaterialSignalCellular_0Bar.propTypes = { ...Icon.propTypes }

export default MaterialSignalCellular_0Bar
