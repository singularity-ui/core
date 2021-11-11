import React from 'react'

import Icon from '../Icon'

const MaterialKeyboardArrowLeftRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M14.71 15.88L10.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z" />
  </svg>
)

const MaterialKeyboardArrowLeftRounded = props => <Icon as={MaterialKeyboardArrowLeftRoundedSvg} {...props} />

MaterialKeyboardArrowLeftRounded.defaultProps = { ...Icon.defaultProps }

MaterialKeyboardArrowLeftRounded.propTypes = { ...Icon.propTypes }

export default MaterialKeyboardArrowLeftRounded