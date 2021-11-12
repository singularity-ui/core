import React from 'react'

import Icon from '../Icon'

const MaterialCallMadeRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M9 6c0 .56.45 1 1 1h5.59L4.7 17.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L17 8.41V14c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1z" />
  </svg>
)

const MaterialCallMadeRounded = props => <Icon as={MaterialCallMadeRoundedSvg} {...props} />

MaterialCallMadeRounded.defaultProps = { ...Icon.defaultProps }

MaterialCallMadeRounded.propTypes = { ...Icon.propTypes }

export default MaterialCallMadeRounded
