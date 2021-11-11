import React from 'react'

import Icon from '../Icon'

const MaterialTagOutlinedSvg = props => (
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
      <path d="M20,10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4H20z M14,14h-4v-4h4V14z" />
    </g>
  </svg>
)

const MaterialTagOutlined = props => <Icon as={MaterialTagOutlinedSvg} {...props} />

MaterialTagOutlined.defaultProps = { ...Icon.defaultProps }

MaterialTagOutlined.propTypes = { ...Icon.propTypes }

export default MaterialTagOutlined
