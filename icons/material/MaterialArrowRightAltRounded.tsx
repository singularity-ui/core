import React from 'react'

import Icon from '../Icon'

const MaterialArrowRightAltRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M16.01 11H5c-.55 0-1 .45-1 1s.45 1 1 1h11.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35V11z" />
  </svg>
)

const MaterialArrowRightAltRounded = props => <Icon as={MaterialArrowRightAltRoundedSvg} {...props} />

MaterialArrowRightAltRounded.defaultProps = { ...Icon.defaultProps }

MaterialArrowRightAltRounded.propTypes = { ...Icon.propTypes }

export default MaterialArrowRightAltRounded