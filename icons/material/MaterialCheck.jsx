import React from 'react'

import Icon from '../Icon'

const MaterialCheckSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
)

const MaterialCheck = props => <Icon as={MaterialCheckSvg} {...props} />

MaterialCheck.defaultProps = { ...Icon.defaultProps }

MaterialCheck.propTypes = { ...Icon.propTypes }

export default MaterialCheck
