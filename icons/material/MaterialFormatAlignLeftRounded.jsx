import React from 'react'

import Icon from '../Icon'

const MaterialFormatAlignLeftRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M14 15H4c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zm0-8H4c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zM4 13h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0 8h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 4c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
  </svg>
)

const MaterialFormatAlignLeftRounded = props => <Icon as={MaterialFormatAlignLeftRoundedSvg} {...props} />

MaterialFormatAlignLeftRounded.defaultProps = { ...Icon.defaultProps }

MaterialFormatAlignLeftRounded.propTypes = { ...Icon.propTypes }

export default MaterialFormatAlignLeftRounded
