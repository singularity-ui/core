import React from 'react'

import Icon from '../Icon'

const MaterialSimCardDownloadSharpSvg = props => (
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
      <path d="M20,2H10L4,8v14h16V2z M12,17l-4-4h3V9.02L13,9v4h3L12,17z" />
    </g>
  </svg>
)

const MaterialSimCardDownloadSharp = props => <Icon as={MaterialSimCardDownloadSharpSvg} {...props} />

MaterialSimCardDownloadSharp.defaultProps = { ...Icon.defaultProps }

MaterialSimCardDownloadSharp.propTypes = { ...Icon.propTypes }

export default MaterialSimCardDownloadSharp
