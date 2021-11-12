import React from 'react'

import Icon from '../Icon'

const MaterialSkipPreviousSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M6 6h2v12H6V6zm3.5 6l8.5 6V6l-8.5 6z" />
  </svg>
)

const MaterialSkipPreviousSharp = props => <Icon as={MaterialSkipPreviousSharpSvg} {...props} />

MaterialSkipPreviousSharp.defaultProps = { ...Icon.defaultProps }

MaterialSkipPreviousSharp.propTypes = { ...Icon.propTypes }

export default MaterialSkipPreviousSharp
