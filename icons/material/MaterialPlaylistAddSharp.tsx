import React from 'react'

import Icon from '../Icon'

const MaterialPlaylistAddSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <path d="M14,10H3v2h11V10z M14,6H3v2h11V6z M18,14v-4h-2v4h-4v2h4v4h2v-4h4v-2H18z M3,16h7v-2H3V16z" />
    </g>
  </svg>
)

const MaterialPlaylistAddSharp = props => <Icon as={MaterialPlaylistAddSharpSvg} {...props} />

MaterialPlaylistAddSharp.defaultProps = { ...Icon.defaultProps }

MaterialPlaylistAddSharp.propTypes = { ...Icon.propTypes }

export default MaterialPlaylistAddSharp
