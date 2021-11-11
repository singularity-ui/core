import React from 'react'

import Icon from '../Icon'

const MaterialChevronRightSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
  </svg>
)

const MaterialChevronRightSharp = props => <Icon as={MaterialChevronRightSharpSvg} {...props} />

MaterialChevronRightSharp.defaultProps = { ...Icon.defaultProps }

MaterialChevronRightSharp.propTypes = { ...Icon.propTypes }

export default MaterialChevronRightSharp
