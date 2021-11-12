import React from 'react'

import Icon from '../Icon'

const MaterialChevronLeftSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
  </svg>
)

const MaterialChevronLeftSharp = props => <Icon as={MaterialChevronLeftSharpSvg} {...props} />

MaterialChevronLeftSharp.defaultProps = { ...Icon.defaultProps }

MaterialChevronLeftSharp.propTypes = { ...Icon.propTypes }

export default MaterialChevronLeftSharp
