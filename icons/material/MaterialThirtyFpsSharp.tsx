import React from 'react'

import Icon from '../Icon'

const MaterialThirtyFpsSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <g>
        <path d="M2,5v3h6v2.5H3v3h5V16H2v3h9V5H2z M19,8v8h-4V8H19 M22,5H12v14h10V5z" />
      </g>
    </g>
  </svg>
)

const MaterialThirtyFpsSharp = props => <Icon as={MaterialThirtyFpsSharpSvg} {...props} />

MaterialThirtyFpsSharp.defaultProps = { ...Icon.defaultProps }

MaterialThirtyFpsSharp.propTypes = { ...Icon.propTypes }

export default MaterialThirtyFpsSharp
