import React from 'react'

import Icon from '../Icon'

const MaterialKeyboardArrowUpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
  </svg>
)

const MaterialKeyboardArrowUp = props => <Icon as={MaterialKeyboardArrowUpSvg} {...props} />

MaterialKeyboardArrowUp.defaultProps = { ...Icon.defaultProps }

MaterialKeyboardArrowUp.propTypes = { ...Icon.propTypes }

export default MaterialKeyboardArrowUp