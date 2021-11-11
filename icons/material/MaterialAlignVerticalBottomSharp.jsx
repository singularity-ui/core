import React from 'react'

import Icon from '../Icon'

const MaterialAlignVerticalBottomSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M22,22H2v-2h20V22z M10,2H7v16h3V2z M17,8h-3v10h3V8z" />
  </svg>
)

const MaterialAlignVerticalBottomSharp = props => <Icon as={MaterialAlignVerticalBottomSharpSvg} {...props} />

MaterialAlignVerticalBottomSharp.defaultProps = { ...Icon.defaultProps }

MaterialAlignVerticalBottomSharp.propTypes = { ...Icon.propTypes }

export default MaterialAlignVerticalBottomSharp
