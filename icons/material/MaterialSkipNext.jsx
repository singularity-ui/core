import React from 'react'

import Icon from '../Icon'

const MaterialSkipNextSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
  </svg>
)

const MaterialSkipNext = props => <Icon as={MaterialSkipNextSvg} {...props} />

MaterialSkipNext.defaultProps = { ...Icon.defaultProps }

MaterialSkipNext.propTypes = { ...Icon.propTypes }

export default MaterialSkipNext
