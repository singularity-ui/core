import React from 'react'

import Icon from '../Icon'

const MaterialBurstModeRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M2 5c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1zm4 0c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1zm16 0H10c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM11.64 16.19l1.47-1.86c.2-.25.57-.25.78-.01l1.4 1.68 2.1-2.71c.2-.26.59-.26.79 0l2.21 2.9c.25.33.02.8-.4.8h-7.96c-.41.01-.65-.47-.39-.8z" />
  </svg>
)

const MaterialBurstModeRounded = props => <Icon as={MaterialBurstModeRoundedSvg} {...props} />

MaterialBurstModeRounded.defaultProps = { ...Icon.defaultProps }

MaterialBurstModeRounded.propTypes = { ...Icon.propTypes }

export default MaterialBurstModeRounded