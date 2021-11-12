import React from 'react'

import Icon from '../Icon'

const MaterialSmsFailedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z" />
  </svg>
)

const MaterialSmsFailed = props => <Icon as={MaterialSmsFailedSvg} {...props} />

MaterialSmsFailed.defaultProps = { ...Icon.defaultProps }

MaterialSmsFailed.propTypes = { ...Icon.propTypes }

export default MaterialSmsFailed
