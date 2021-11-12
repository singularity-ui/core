import React from 'react'

import Icon from '../Icon'

const MaterialLaptopRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H1c-.55 0-1 .45-1 1s.45 1 1 1h22c.55 0 1-.45 1-1s-.45-1-1-1h-3zM5 6h14c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1z" />
  </svg>
)

const MaterialLaptopRounded = props => <Icon as={MaterialLaptopRoundedSvg} {...props} />

MaterialLaptopRounded.defaultProps = { ...Icon.defaultProps }

MaterialLaptopRounded.propTypes = { ...Icon.propTypes }

export default MaterialLaptopRounded
