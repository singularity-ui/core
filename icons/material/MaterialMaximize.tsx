import React from 'react'

import Icon from '../Icon'

const MaterialMaximizeSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 3h18v2H3z" />
  </svg>
)

const MaterialMaximize = props => <Icon as={MaterialMaximizeSvg} {...props} />

MaterialMaximize.defaultProps = { ...Icon.defaultProps }

MaterialMaximize.propTypes = { ...Icon.propTypes }

export default MaterialMaximize
