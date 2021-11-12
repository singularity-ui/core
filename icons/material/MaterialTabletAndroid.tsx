import React from 'react'

import Icon from '../Icon'

const MaterialTabletAndroidSvg = props => (
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
          <path d="M18,0H6C4.34,0,3,1.34,3,3v18c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V3C21,1.34,19.66,0,18,0z M14,22h-4v-1h4V22z M19.25,19H4.75V3h14.5V19z" />
        </g>
      </g>
    </g>
  </svg>
)

const MaterialTabletAndroid = props => <Icon as={MaterialTabletAndroidSvg} {...props} />

MaterialTabletAndroid.defaultProps = { ...Icon.defaultProps }

MaterialTabletAndroid.propTypes = { ...Icon.propTypes }

export default MaterialTabletAndroid
