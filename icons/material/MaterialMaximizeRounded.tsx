import React from 'react'

import Icon from '../Icon'

const MaterialMaximizeRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4 3h16c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z" />
  </svg>
)

const MaterialMaximizeRounded = props => <Icon as={MaterialMaximizeRoundedSvg} {...props} />

MaterialMaximizeRounded.defaultProps = { ...Icon.defaultProps }

MaterialMaximizeRounded.propTypes = { ...Icon.propTypes }

export default MaterialMaximizeRounded
