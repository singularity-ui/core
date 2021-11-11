import React from 'react'

import Icon from '../Icon'

const MaterialArrowDropUpTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7 14l5-5 5 5H7z" />
  </svg>
)

const MaterialArrowDropUpTwoTone = props => <Icon as={MaterialArrowDropUpTwoToneSvg} {...props} />

MaterialArrowDropUpTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialArrowDropUpTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialArrowDropUpTwoTone
