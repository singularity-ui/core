import React from 'react'

import Icon from '../Icon'

const MaterialOfflineShareSharpSvg = props => (
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
        <g>
          <polygon points="6,5 4,5 4,23 16,23 16,21 6,21" />
        </g>
        <g>
          <path d="M20,1H8v18h12V1z M18,15h-8V5h8V15z" />
        </g>
        <g>
          <polygon points="12.5,10.25 14.5,10.25 14.5,12 17,9.5 14.5,7 14.5,8.75 11,8.75 11,12 12.5,12" />
        </g>
      </g>
    </g>
  </svg>
)

const MaterialOfflineShareSharp = props => <Icon as={MaterialOfflineShareSharpSvg} {...props} />

MaterialOfflineShareSharp.defaultProps = { ...Icon.defaultProps }

MaterialOfflineShareSharp.propTypes = { ...Icon.propTypes }

export default MaterialOfflineShareSharp