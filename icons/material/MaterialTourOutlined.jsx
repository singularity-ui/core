import React from 'react'

import Icon from '../Icon'

const MaterialTourOutlinedSvg = props => (
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
      <path d="M21,4h-8h-1H7V2H5v2v10v8h2v-8h4h1h9l-2-5L21,4z M17.14,9.74l0.9,2.26H12h-1H7V6h5h1h5.05l-0.9,2.26L16.85,9L17.14,9.74z M14,9c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S14,7.9,14,9z" />
    </g>
  </svg>
)

const MaterialTourOutlined = props => <Icon as={MaterialTourOutlinedSvg} {...props} />

MaterialTourOutlined.defaultProps = { ...Icon.defaultProps }

MaterialTourOutlined.propTypes = { ...Icon.propTypes }

export default MaterialTourOutlined