import React from 'react'

import Icon from '../Icon'

const MaterialSpaceBarOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M18 9v4H6V9H4v6h16V9h-2z" />
  </svg>
)

const MaterialSpaceBarOutlined = props => <Icon as={MaterialSpaceBarOutlinedSvg} {...props} />

MaterialSpaceBarOutlined.defaultProps = { ...Icon.defaultProps }

MaterialSpaceBarOutlined.propTypes = { ...Icon.propTypes }

export default MaterialSpaceBarOutlined
