import React from 'react'

import Icon from '../Icon'

const MaterialHomeRepairServiceSharpSvg = props => (
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
          <polygon points="18,16 16,16 16,15 8,15 8,16 6,16 6,15 2,15 2,20 22,20 22,15 18,15" />
        </g>
        <path d="M17,8V4H7v4H2v6h4v-2h2v2h8v-2h2v2h4V8H17z M9,6h6v2H9V6z" />
      </g>
    </g>
  </svg>
)

const MaterialHomeRepairServiceSharp = props => <Icon as={MaterialHomeRepairServiceSharpSvg} {...props} />

MaterialHomeRepairServiceSharp.defaultProps = { ...Icon.defaultProps }

MaterialHomeRepairServiceSharp.propTypes = { ...Icon.propTypes }

export default MaterialHomeRepairServiceSharp