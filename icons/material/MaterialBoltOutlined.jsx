import React from 'react'

import Icon from '../Icon'

const MaterialBoltOutlinedSvg = props => (
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
      <path d="M11,21h-1l1-7H7.5c-0.88,0-0.33-0.75-0.31-0.78C8.48,10.94,10.42,7.54,13.01,3h1l-1,7h3.51c0.4,0,0.62,0.19,0.4,0.66 C12.97,17.55,11,21,11,21z" />
    </g>
  </svg>
)

const MaterialBoltOutlined = props => <Icon as={MaterialBoltOutlinedSvg} {...props} />

MaterialBoltOutlined.defaultProps = { ...Icon.defaultProps }

MaterialBoltOutlined.propTypes = { ...Icon.propTypes }

export default MaterialBoltOutlined