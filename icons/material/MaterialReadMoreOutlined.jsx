import React from 'react'

import Icon from '../Icon'

const MaterialReadMoreOutlinedSvg = props => (
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
        <rect height="2" width="9" x="13" y="7" />
        <rect height="2" width="9" x="13" y="15" />
        <rect height="2" width="6" x="16" y="11" />
        <polygon points="13,12 8,7 8,11 2,11 2,13 8,13 8,17" />
      </g>
    </g>
  </svg>
)

const MaterialReadMoreOutlined = props => <Icon as={MaterialReadMoreOutlinedSvg} {...props} />

MaterialReadMoreOutlined.defaultProps = { ...Icon.defaultProps }

MaterialReadMoreOutlined.propTypes = { ...Icon.propTypes }

export default MaterialReadMoreOutlined
