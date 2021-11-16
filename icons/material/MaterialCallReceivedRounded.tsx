import React from 'react'

import Icon from '../Icon'

const MaterialCallReceivedRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19.3 4.71c-.39-.39-1.02-.39-1.41 0L7 15.59V10c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1H8.41L19.3 6.11c.38-.38.38-1.02 0-1.4z" />
  </svg>
)

const MaterialCallReceivedRounded = props => <Icon as={MaterialCallReceivedRoundedSvg} {...props} />

MaterialCallReceivedRounded.defaultProps = { ...Icon.defaultProps }

MaterialCallReceivedRounded.propTypes = { ...Icon.propTypes }

export default MaterialCallReceivedRounded