import React from 'react'

import Icon from '../Icon'

const MaterialStopOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M16 8v8H8V8h8m2-2H6v12h12V6z" />
  </svg>
)

const MaterialStopOutlined = props => <Icon as={MaterialStopOutlinedSvg} {...props} />

MaterialStopOutlined.defaultProps = { ...Icon.defaultProps }

MaterialStopOutlined.propTypes = { ...Icon.propTypes }

export default MaterialStopOutlined
