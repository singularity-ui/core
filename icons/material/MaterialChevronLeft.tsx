import React from 'react'

import Icon from '../Icon'

const MaterialChevronLeftSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
  </svg>
)

const MaterialChevronLeft = props => <Icon as={MaterialChevronLeftSvg} {...props} />

MaterialChevronLeft.defaultProps = { ...Icon.defaultProps }

MaterialChevronLeft.propTypes = { ...Icon.propTypes }

export default MaterialChevronLeft
