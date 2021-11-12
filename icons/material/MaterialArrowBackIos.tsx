import React from 'react'

import Icon from '../Icon'

const MaterialArrowBackIosSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
  </svg>
)

const MaterialArrowBackIos = props => <Icon as={MaterialArrowBackIosSvg} {...props} />

MaterialArrowBackIos.defaultProps = { ...Icon.defaultProps }

MaterialArrowBackIos.propTypes = { ...Icon.propTypes }

export default MaterialArrowBackIos
