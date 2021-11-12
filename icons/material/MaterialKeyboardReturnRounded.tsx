import React from 'react'

import Icon from '../Icon'

const MaterialKeyboardReturnRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M19 8v3H5.83l2.88-2.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L2.71 11.3c-.39.39-.39 1.02 0 1.41L7.3 17.3c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L5.83 13H20c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1z" />
  </svg>
)

const MaterialKeyboardReturnRounded = props => <Icon as={MaterialKeyboardReturnRoundedSvg} {...props} />

MaterialKeyboardReturnRounded.defaultProps = { ...Icon.defaultProps }

MaterialKeyboardReturnRounded.propTypes = { ...Icon.propTypes }

export default MaterialKeyboardReturnRounded
