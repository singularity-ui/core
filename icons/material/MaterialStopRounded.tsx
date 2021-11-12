import React from 'react'

import Icon from '../Icon'

const MaterialStopRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M8 6h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z" />
  </svg>
)

const MaterialStopRounded = props => <Icon as={MaterialStopRoundedSvg} {...props} />

MaterialStopRounded.defaultProps = { ...Icon.defaultProps }

MaterialStopRounded.propTypes = { ...Icon.propTypes }

export default MaterialStopRounded
