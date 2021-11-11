import React from 'react'

import Icon from '../Icon'

const MaterialArrowDropUpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M7 14l5-5 5 5z" />
  </svg>
)

const MaterialArrowDropUp = props => <Icon as={MaterialArrowDropUpSvg} {...props} />

MaterialArrowDropUp.defaultProps = { ...Icon.defaultProps }

MaterialArrowDropUp.propTypes = { ...Icon.propTypes }

export default MaterialArrowDropUp
