import React from 'react'

import Icon from '../Icon'

const MaterialQuestionAnswerSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 6h-3v9H6v3h12l4 4V6zm-5 7V2H2v15l4-4h11z" />
  </svg>
)

const MaterialQuestionAnswerSharp = props => <Icon as={MaterialQuestionAnswerSharpSvg} {...props} />

MaterialQuestionAnswerSharp.defaultProps = { ...Icon.defaultProps }

MaterialQuestionAnswerSharp.propTypes = { ...Icon.propTypes }

export default MaterialQuestionAnswerSharp
