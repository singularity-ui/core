import React from 'react'

import Icon from '../Icon'

const MaterialBedtimeRoundedSvg = props => (
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
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <g>
        <path d="M11.97,2.73c0.16-0.34-0.12-0.72-0.5-0.7C5.47,2.33,1,7.86,2.19,13.99c0.78,4.03,4.09,7.22,8.14,7.87 c4.07,0.66,7.77-1.14,9.87-4.15c0.21-0.31,0.04-0.75-0.33-0.79C13.13,16.16,9,8.96,11.97,2.73z" />
      </g>
    </g>
  </svg>
)

const MaterialBedtimeRounded = props => <Icon as={MaterialBedtimeRoundedSvg} {...props} />

MaterialBedtimeRounded.defaultProps = { ...Icon.defaultProps }

MaterialBedtimeRounded.propTypes = { ...Icon.propTypes }

export default MaterialBedtimeRounded