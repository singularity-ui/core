import React from 'react'

import Icon from '../Icon'

const MaterialModeCommentSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M22 2H2v16h16l4 4z" />
  </svg>
)

const MaterialModeCommentSharp = props => <Icon as={MaterialModeCommentSharpSvg} {...props} />

MaterialModeCommentSharp.defaultProps = { ...Icon.defaultProps }

MaterialModeCommentSharp.propTypes = { ...Icon.propTypes }

export default MaterialModeCommentSharp
