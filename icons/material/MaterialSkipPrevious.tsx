import React from 'react'

import Icon from '../Icon'

const MaterialSkipPreviousSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
  </svg>
)

const MaterialSkipPrevious = props => <Icon as={MaterialSkipPreviousSvg} {...props} />

MaterialSkipPrevious.defaultProps = { ...Icon.defaultProps }

MaterialSkipPrevious.propTypes = { ...Icon.propTypes }

export default MaterialSkipPrevious
