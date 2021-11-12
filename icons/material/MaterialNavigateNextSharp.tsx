import React from 'react'

import Icon from '../Icon'

const MaterialNavigateNextSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
  </svg>
)

const MaterialNavigateNextSharp = props => <Icon as={MaterialNavigateNextSharpSvg} {...props} />

MaterialNavigateNextSharp.defaultProps = { ...Icon.defaultProps }

MaterialNavigateNextSharp.propTypes = { ...Icon.propTypes }

export default MaterialNavigateNextSharp
