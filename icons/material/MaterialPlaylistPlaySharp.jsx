import React from 'react'

import Icon from '../Icon'

const MaterialPlaylistPlaySharpSvg = props => (
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
      <g>
        <rect height="2" width="11" x="3" y="10" />
        <rect height="2" width="11" x="3" y="6" />
        <rect height="2" width="7" x="3" y="14" />
        <polygon points="16,13 16,21 22,17" />
      </g>
    </g>
  </svg>
)

const MaterialPlaylistPlaySharp = props => <Icon as={MaterialPlaylistPlaySharpSvg} {...props} />

MaterialPlaylistPlaySharp.defaultProps = { ...Icon.defaultProps }

MaterialPlaylistPlaySharp.propTypes = { ...Icon.propTypes }

export default MaterialPlaylistPlaySharp
