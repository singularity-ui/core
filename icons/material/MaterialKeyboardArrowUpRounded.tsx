import React from 'react'

import Icon from '../Icon'

const MaterialKeyboardArrowUpRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M8.12 14.71L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.39-.39-1.02-.39-1.41 0L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.38 1.03.39 1.42 0z" />
  </svg>
)

const MaterialKeyboardArrowUpRounded = props => <Icon as={MaterialKeyboardArrowUpRoundedSvg} {...props} />

MaterialKeyboardArrowUpRounded.defaultProps = { ...Icon.defaultProps }

MaterialKeyboardArrowUpRounded.propTypes = { ...Icon.propTypes }

export default MaterialKeyboardArrowUpRounded