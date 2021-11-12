import React from 'react'

import Icon from '../Icon'

const MaterialQuickreplyOutlinedSvg = props => (
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
          <path d="M4,17.17V4h16v6h2V4c0-1.1-0.9-2-2-2H4C2.9,2,2.01,2.9,2.01,4L2,22l4-4h9v-2H5.17L4,17.17z" />
        </g>
        <g>
          <polygon points="22.5,16 20.3,16 22,12 17,12 17,18 19,18 19,23" />
        </g>
      </g>
    </g>
  </svg>
)

const MaterialQuickreplyOutlined = props => <Icon as={MaterialQuickreplyOutlinedSvg} {...props} />

MaterialQuickreplyOutlined.defaultProps = { ...Icon.defaultProps }

MaterialQuickreplyOutlined.propTypes = { ...Icon.propTypes }

export default MaterialQuickreplyOutlined
