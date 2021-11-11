import React from 'react'

import Icon from '../Icon'

const MaterialQuickreplySharpSvg = props => (
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
        <g>
          <polygon points="22,2 2,2 2,22 6,18 15,18 15,10 22,10" />
        </g>
        <g>
          <polygon points="22.5,16 20.3,16 22,12 17,12 17,18 19,18 19,23" />
        </g>
      </g>
    </g>
  </svg>
)

const MaterialQuickreplySharp = props => <Icon as={MaterialQuickreplySharpSvg} {...props} />

MaterialQuickreplySharp.defaultProps = { ...Icon.defaultProps }

MaterialQuickreplySharp.propTypes = { ...Icon.propTypes }

export default MaterialQuickreplySharp
