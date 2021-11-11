import React from 'react'

import Icon from '../Icon'

const MaterialModeCommentSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
  </svg>
)

const MaterialModeComment = props => <Icon as={MaterialModeCommentSvg} {...props} />

MaterialModeComment.defaultProps = { ...Icon.defaultProps }

MaterialModeComment.propTypes = { ...Icon.propTypes }

export default MaterialModeComment