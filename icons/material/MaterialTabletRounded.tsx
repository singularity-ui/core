import React from 'react'

import Icon from '../Icon'

const MaterialTabletRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z" />
  </svg>
)

const MaterialTabletRounded = props => <Icon as={MaterialTabletRoundedSvg} {...props} />

MaterialTabletRounded.defaultProps = { ...Icon.defaultProps }

MaterialTabletRounded.propTypes = { ...Icon.propTypes }

export default MaterialTabletRounded