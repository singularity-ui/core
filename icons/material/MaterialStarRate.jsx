import React from 'react'

import Icon from '../Icon'

const MaterialStarRateSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" x="0" />
      <polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10" />
    </g>
  </svg>
)

const MaterialStarRate = props => <Icon as={MaterialStarRateSvg} {...props} />

MaterialStarRate.defaultProps = { ...Icon.defaultProps }

MaterialStarRate.propTypes = { ...Icon.propTypes }

export default MaterialStarRate
