import React from 'react'

import Icon from '../Icon'

const MaterialRemoveRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z" />
  </svg>
)

const MaterialRemoveRounded = props => <Icon as={MaterialRemoveRoundedSvg} {...props} />

MaterialRemoveRounded.defaultProps = { ...Icon.defaultProps }

MaterialRemoveRounded.propTypes = { ...Icon.propTypes }

export default MaterialRemoveRounded