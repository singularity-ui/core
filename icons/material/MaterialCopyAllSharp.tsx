import React from 'react'

import Icon from '../Icon'

const MaterialCopyAllSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M20,2H7v16h13V2z M18,16H9V4h9V16z M3,15v-2h2v2H3z M3,9.5h2v2H3V9.5z M10,20h2v2h-2V20z M3,18.5v-2h2v2H3z M5,22H3v-2h2V22 z M8.5,22h-2v-2h2V22z M15.5,22h-2v-2h2V22z M3,6h2v2H3V6z" />
  </svg>
)

const MaterialCopyAllSharp = props => <Icon as={MaterialCopyAllSharpSvg} {...props} />

MaterialCopyAllSharp.defaultProps = { ...Icon.defaultProps }

MaterialCopyAllSharp.propTypes = { ...Icon.propTypes }

export default MaterialCopyAllSharp