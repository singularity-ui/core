import React from 'react'

import Icon from '../Icon'

const MaterialMinimizeRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7 19h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1z" />
  </svg>
)

const MaterialMinimizeRounded = props => <Icon as={MaterialMinimizeRoundedSvg} {...props} />

MaterialMinimizeRounded.defaultProps = { ...Icon.defaultProps }

MaterialMinimizeRounded.propTypes = { ...Icon.propTypes }

export default MaterialMinimizeRounded
