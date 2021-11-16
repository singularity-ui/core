import React from 'react'

import Icon from '../Icon'

const MaterialDirectionsOffSvg = props => (
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
        <path d="M9.41,6.58L12,4h0l8,8l-2.58,2.59L18.83,16l2.58-2.59c0.78-0.78,0.78-2.05,0-2.83l-8-8c-0.78-0.78-2.05-0.78-2.83,0 L8,5.17L9.41,6.58z" />
        <path d="M2.81,2.81L1.39,4.22L5.17,8l-2.58,2.59c-0.78,0.78-0.78,2.05,0,2.83l8,8c0.78,0.78,2.05,0.78,2.83,0L16,18.83l3.78,3.78 l1.41-1.41L2.81,2.81z M12,20l-8-8l2.58-2.59L8.17,11H7v2h3.17l1.5,1.5l-1.08,1.09L12,17l1.09-1.09l1.5,1.5L12,20z" />
        <rect
          height="7.07"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -3.0134 12.8107)"
          width="1.54"
          x="13.19"
          y="6.51"
        />
      </g>
    </g>
  </svg>
)

const MaterialDirectionsOff = props => <Icon as={MaterialDirectionsOffSvg} {...props} />

MaterialDirectionsOff.defaultProps = { ...Icon.defaultProps }

MaterialDirectionsOff.propTypes = { ...Icon.propTypes }

export default MaterialDirectionsOff