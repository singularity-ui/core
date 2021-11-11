import React from 'react'

import Icon from '../Icon'

const MaterialGridViewSharpSvg = props => (
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
        <rect height="8" width="8" x="3" y="3" />
        <rect height="8" width="8" x="3" y="13" />
        <rect height="8" width="8" x="13" y="3" />
        <rect height="8" width="8" x="13" y="13" />
      </g>
    </g>
  </svg>
)

const MaterialGridViewSharp = props => <Icon as={MaterialGridViewSharpSvg} {...props} />

MaterialGridViewSharp.defaultProps = { ...Icon.defaultProps }

MaterialGridViewSharp.propTypes = { ...Icon.propTypes }

export default MaterialGridViewSharp