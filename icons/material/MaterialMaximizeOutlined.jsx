import React from 'react'

import Icon from '../Icon'

const MaterialMaximizeOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 3h18v2H3V3z" />
  </svg>
)

const MaterialMaximizeOutlined = props => <Icon as={MaterialMaximizeOutlinedSvg} {...props} />

MaterialMaximizeOutlined.defaultProps = { ...Icon.defaultProps }

MaterialMaximizeOutlined.propTypes = { ...Icon.propTypes }

export default MaterialMaximizeOutlined
