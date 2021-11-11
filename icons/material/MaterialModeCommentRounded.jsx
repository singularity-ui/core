import React from 'react'

import Icon from '../Icon'

const MaterialModeCommentRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4z" />
  </svg>
)

const MaterialModeCommentRounded = props => <Icon as={MaterialModeCommentRoundedSvg} {...props} />

MaterialModeCommentRounded.defaultProps = { ...Icon.defaultProps }

MaterialModeCommentRounded.propTypes = { ...Icon.propTypes }

export default MaterialModeCommentRounded
