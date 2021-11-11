import React from 'react'

import Icon from '../Icon'

const MaterialArrowDropDownCircleSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z" />
  </svg>
)

const MaterialArrowDropDownCircle = props => <Icon as={MaterialArrowDropDownCircleSvg} {...props} />

MaterialArrowDropDownCircle.defaultProps = { ...Icon.defaultProps }

MaterialArrowDropDownCircle.propTypes = { ...Icon.propTypes }

export default MaterialArrowDropDownCircle