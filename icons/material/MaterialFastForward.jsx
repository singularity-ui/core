import React from 'react'

import Icon from '../Icon'

const MaterialFastForwardSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
  </svg>
)

const MaterialFastForward = props => <Icon as={MaterialFastForwardSvg} {...props} />

MaterialFastForward.defaultProps = { ...Icon.defaultProps }

MaterialFastForward.propTypes = { ...Icon.propTypes }

export default MaterialFastForward