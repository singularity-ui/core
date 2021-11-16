import React from 'react'

import Icon from '../Icon'

const MaterialTabletTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5 6h14v12H5z" opacity=".3" />
    <path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z" />
  </svg>
)

const MaterialTabletTwoTone = props => <Icon as={MaterialTabletTwoToneSvg} {...props} />

MaterialTabletTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialTabletTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialTabletTwoTone