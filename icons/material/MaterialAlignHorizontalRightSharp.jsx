import React from 'react'

import Icon from '../Icon'

const MaterialAlignHorizontalRightSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M20,2h2v20h-2V2z M2,10h16V7H2V10z M8,17h10v-3H8V17z" />
  </svg>
)

const MaterialAlignHorizontalRightSharp = props => <Icon as={MaterialAlignHorizontalRightSharpSvg} {...props} />

MaterialAlignHorizontalRightSharp.defaultProps = { ...Icon.defaultProps }

MaterialAlignHorizontalRightSharp.propTypes = { ...Icon.propTypes }

export default MaterialAlignHorizontalRightSharp
