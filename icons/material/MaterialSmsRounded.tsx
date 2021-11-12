import React from 'react'

import Icon from '../Icon'

const MaterialSmsRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z" />
  </svg>
)

const MaterialSmsRounded = props => <Icon as={MaterialSmsRoundedSvg} {...props} />

MaterialSmsRounded.defaultProps = { ...Icon.defaultProps }

MaterialSmsRounded.propTypes = { ...Icon.propTypes }

export default MaterialSmsRounded
