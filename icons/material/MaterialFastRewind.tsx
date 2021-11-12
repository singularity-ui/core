import React from 'react'

import Icon from '../Icon'

const MaterialFastRewindSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" />
  </svg>
)

const MaterialFastRewind = props => <Icon as={MaterialFastRewindSvg} {...props} />

MaterialFastRewind.defaultProps = { ...Icon.defaultProps }

MaterialFastRewind.propTypes = { ...Icon.propTypes }

export default MaterialFastRewind
