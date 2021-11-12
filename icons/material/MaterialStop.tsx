import React from 'react'

import Icon from '../Icon'

const MaterialStopSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M6 6h12v12H6z" />
  </svg>
)

const MaterialStop = props => <Icon as={MaterialStopSvg} {...props} />

MaterialStop.defaultProps = { ...Icon.defaultProps }

MaterialStop.propTypes = { ...Icon.propTypes }

export default MaterialStop
