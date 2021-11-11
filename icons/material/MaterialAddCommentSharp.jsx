import React from 'react'

import Icon from '../Icon'

const MaterialAddCommentSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M22 2H2v16h16l4 4V2zm-5 9h-4v4h-2v-4H7V9h4V5h2v4h4v2z" />
  </svg>
)

const MaterialAddCommentSharp = props => <Icon as={MaterialAddCommentSharpSvg} {...props} />

MaterialAddCommentSharp.defaultProps = { ...Icon.defaultProps }

MaterialAddCommentSharp.propTypes = { ...Icon.propTypes }

export default MaterialAddCommentSharp
