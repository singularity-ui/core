import React from 'react'

import Icon from '../Icon'

const MaterialCodeOffSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M19.17,12l-4.58-4.59L16,6l6,6l-3.59,3.59L17,14.17L19.17,12z M1.39,4.22l4.19,4.19L2,12l6,6l1.41-1.41L4.83,12L7,9.83 l12.78,12.78l1.41-1.41L2.81,2.81L1.39,4.22z" />
  </svg>
)

const MaterialCodeOffSharp = props => <Icon as={MaterialCodeOffSharpSvg} {...props} />

MaterialCodeOffSharp.defaultProps = { ...Icon.defaultProps }

MaterialCodeOffSharp.propTypes = { ...Icon.propTypes }

export default MaterialCodeOffSharp