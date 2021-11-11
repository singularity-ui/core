import React from 'react'

import Icon from '../Icon'

const MaterialThumbDownOffAltSharpSvg = props => (
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
        <rect height="12" width="4" x="19" y="3" />
        <path d="M1,11.6V16h8.31l-1.12,5.38L9.83,23L17,15.82V3H4.69L1,11.6z M15,5v9.99l-4.34,4.35l0.61-2.93l0.5-2.41H9.31H3v-1.99 L6.01,5H15z" />
      </g>
    </g>
  </svg>
)

const MaterialThumbDownOffAltSharp = props => <Icon as={MaterialThumbDownOffAltSharpSvg} {...props} />

MaterialThumbDownOffAltSharp.defaultProps = { ...Icon.defaultProps }

MaterialThumbDownOffAltSharp.propTypes = { ...Icon.propTypes }

export default MaterialThumbDownOffAltSharp