import React from 'react'

import Icon from '../Icon'

const MaterialArrowDropDownTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7 10l5 5 5-5H7z" />
  </svg>
)

const MaterialArrowDropDownTwoTone = props => <Icon as={MaterialArrowDropDownTwoToneSvg} {...props} />

MaterialArrowDropDownTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialArrowDropDownTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialArrowDropDownTwoTone
