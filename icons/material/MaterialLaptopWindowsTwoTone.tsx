import React from 'react'

import Icon from '../Icon'

const MaterialLaptopWindowsTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4 5h16v10H4z" opacity=".3" />
    <path d="M20 18v-1c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1H0v2h24v-2h-4zM4 5h16v10H4V5z" />
  </svg>
)

const MaterialLaptopWindowsTwoTone = props => <Icon as={MaterialLaptopWindowsTwoToneSvg} {...props} />

MaterialLaptopWindowsTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialLaptopWindowsTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialLaptopWindowsTwoTone
