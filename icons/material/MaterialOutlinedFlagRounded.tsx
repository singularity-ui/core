import React from 'react'

import Icon from '../Icon'

const MaterialOutlinedFlagRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M14 6l-.72-1.45c-.17-.34-.52-.55-.9-.55H6c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1s1-.45 1-1v-6h5l.72 1.45c.17.34.52.55.89.55H19c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1h-5zm4 8h-4l-1-2H7V6h5l1 2h5v6z" />
  </svg>
)

const MaterialOutlinedFlagRounded = props => <Icon as={MaterialOutlinedFlagRoundedSvg} {...props} />

MaterialOutlinedFlagRounded.defaultProps = { ...Icon.defaultProps }

MaterialOutlinedFlagRounded.propTypes = { ...Icon.propTypes }

export default MaterialOutlinedFlagRounded