import React from 'react'

import Icon from '../Icon'

const MaterialArrowDropDownSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M7 10l5 5 5-5z" />
  </svg>
)

const MaterialArrowDropDown = props => <Icon as={MaterialArrowDropDownSvg} {...props} />

MaterialArrowDropDown.defaultProps = { ...Icon.defaultProps }

MaterialArrowDropDown.propTypes = { ...Icon.propTypes }

export default MaterialArrowDropDown
