import React from 'react'

import Icon from '../Icon'

const MaterialComputerTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4 6h16v10H4z" opacity=".3" />
    <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
  </svg>
)

const MaterialComputerTwoTone = props => <Icon as={MaterialComputerTwoToneSvg} {...props} />

MaterialComputerTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialComputerTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialComputerTwoTone