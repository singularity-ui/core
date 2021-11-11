import React from 'react'

import Icon from '../Icon'

const MaterialPriorityHighRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <circle cx="12" cy="19" r="2" />
    <path d="M12 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z" />
  </svg>
)

const MaterialPriorityHighRounded = props => <Icon as={MaterialPriorityHighRoundedSvg} {...props} />

MaterialPriorityHighRounded.defaultProps = { ...Icon.defaultProps }

MaterialPriorityHighRounded.propTypes = { ...Icon.propTypes }

export default MaterialPriorityHighRounded
