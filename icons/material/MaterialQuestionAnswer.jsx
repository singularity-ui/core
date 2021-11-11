import React from 'react'

import Icon from '../Icon'

const MaterialQuestionAnswerSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" />
  </svg>
)

const MaterialQuestionAnswer = props => <Icon as={MaterialQuestionAnswerSvg} {...props} />

MaterialQuestionAnswer.defaultProps = { ...Icon.defaultProps }

MaterialQuestionAnswer.propTypes = { ...Icon.propTypes }

export default MaterialQuestionAnswer
