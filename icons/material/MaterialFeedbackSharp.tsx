import React from 'react'

import Icon from '../Icon'

const MaterialFeedbackSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 2H2.01L2 22l4-4h16V2zm-9 12h-2v-2h2v2zm0-4h-2V6h2v4z" />
  </svg>
)

const MaterialFeedbackSharp = props => <Icon as={MaterialFeedbackSharpSvg} {...props} />

MaterialFeedbackSharp.defaultProps = { ...Icon.defaultProps }

MaterialFeedbackSharp.propTypes = { ...Icon.propTypes }

export default MaterialFeedbackSharp