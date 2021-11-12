import React from 'react'

import Icon from '../Icon'

const MaterialMaximizeTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 3h18v2H3V3z" />
  </svg>
)

const MaterialMaximizeTwoTone = props => <Icon as={MaterialMaximizeTwoToneSvg} {...props} />

MaterialMaximizeTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialMaximizeTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialMaximizeTwoTone
