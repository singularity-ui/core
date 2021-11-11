import React from 'react'

import Icon from '../Icon'

const MaterialAssessmentSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3H3v18h18V3zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
  </svg>
)

const MaterialAssessmentSharp = props => <Icon as={MaterialAssessmentSharpSvg} {...props} />

MaterialAssessmentSharp.defaultProps = { ...Icon.defaultProps }

MaterialAssessmentSharp.propTypes = { ...Icon.propTypes }

export default MaterialAssessmentSharp
