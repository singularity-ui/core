import React from 'react'

import Icon from '../Icon'

const MaterialLaptopWindowsRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M20 18v-1c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1H1c-.55 0-1 .45-1 1s.45 1 1 1h22c.55 0 1-.45 1-1s-.45-1-1-1h-3zM5 5h14c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z" />
  </svg>
)

const MaterialLaptopWindowsRounded = props => <Icon as={MaterialLaptopWindowsRoundedSvg} {...props} />

MaterialLaptopWindowsRounded.defaultProps = { ...Icon.defaultProps }

MaterialLaptopWindowsRounded.propTypes = { ...Icon.propTypes }

export default MaterialLaptopWindowsRounded