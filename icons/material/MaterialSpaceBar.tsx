import React from 'react'

import Icon from '../Icon'

const MaterialSpaceBarSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M18 9v4H6V9H4v6h16V9z" />
  </svg>
)

const MaterialSpaceBar = props => <Icon as={MaterialSpaceBarSvg} {...props} />

MaterialSpaceBar.defaultProps = { ...Icon.defaultProps }

MaterialSpaceBar.propTypes = { ...Icon.propTypes }

export default MaterialSpaceBar
