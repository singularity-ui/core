import React from 'react'

import Icon from '../Icon'

const MaterialGridViewOutlinedSvg = props => (
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
          <path d="M3,3v8h8V3H3z M9,9H5V5h4V9z M3,13v8h8v-8H3z M9,19H5v-4h4V19z M13,3v8h8V3H13z M19,9h-4V5h4V9z M13,13v8h8v-8H13z M19,19h-4v-4h4V19z" />
        </g>
      </g>
    </g>
  </svg>
)

const MaterialGridViewOutlined = props => <Icon as={MaterialGridViewOutlinedSvg} {...props} />

MaterialGridViewOutlined.defaultProps = { ...Icon.defaultProps }

MaterialGridViewOutlined.propTypes = { ...Icon.propTypes }

export default MaterialGridViewOutlined
