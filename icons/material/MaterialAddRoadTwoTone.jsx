import React from 'react'

import Icon from '../Icon'

const MaterialAddRoadTwoToneSvg = props => (
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
        <polygon points="20,18 20,15 18,15 18,18 15,18 15,20 18,20 18,23 20,23 20,20 23,20 23,18" />
        <rect height="9" width="2" x="18" y="4" />
        <rect height="16" width="2" x="4" y="4" />
        <rect height="4" width="2" x="11" y="4" />
        <rect height="4" width="2" x="11" y="10" />
        <rect height="4" width="2" x="11" y="16" />
      </g>
    </g>
  </svg>
)

const MaterialAddRoadTwoTone = props => <Icon as={MaterialAddRoadTwoToneSvg} {...props} />

MaterialAddRoadTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialAddRoadTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialAddRoadTwoTone
