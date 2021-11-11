import React from 'react'

import Icon from '../Icon'

const MaterialCloseFullscreenSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M22,3.41l-5.29,5.29L20,12h-8V4l3.29,3.29L20.59,2L22,3.41z M3.41,22l5.29-5.29L12,20v-8H4l3.29,3.29L2,20.59L3.41,22z" />
  </svg>
)

const MaterialCloseFullscreenSharp = props => <Icon as={MaterialCloseFullscreenSharpSvg} {...props} />

MaterialCloseFullscreenSharp.defaultProps = { ...Icon.defaultProps }

MaterialCloseFullscreenSharp.propTypes = { ...Icon.propTypes }

export default MaterialCloseFullscreenSharp
