import React from 'react'

import Icon from '../Icon'

const MaterialFreeBreakfastRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 3H6c-1.1 0-2 .9-2 2v8c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 5h-2V5h2v3zM5 19h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1z" />
  </svg>
)

const MaterialFreeBreakfastRounded = props => <Icon as={MaterialFreeBreakfastRoundedSvg} {...props} />

MaterialFreeBreakfastRounded.defaultProps = { ...Icon.defaultProps }

MaterialFreeBreakfastRounded.propTypes = { ...Icon.propTypes }

export default MaterialFreeBreakfastRounded