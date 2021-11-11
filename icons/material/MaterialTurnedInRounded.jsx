import React from 'react'

import Icon from '../Icon'

const MaterialTurnedInRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
  </svg>
)

const MaterialTurnedInRounded = props => <Icon as={MaterialTurnedInRoundedSvg} {...props} />

MaterialTurnedInRounded.defaultProps = { ...Icon.defaultProps }

MaterialTurnedInRounded.propTypes = { ...Icon.propTypes }

export default MaterialTurnedInRounded
