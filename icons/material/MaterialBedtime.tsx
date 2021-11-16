import React from 'react'

import Icon from '../Icon'

const MaterialBedtimeSvg = props => (
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
        <path d="M12.34,2.02C6.59,1.82,2,6.42,2,12c0,5.52,4.48,10,10,10c3.71,0,6.93-2.02,8.66-5.02C13.15,16.73,8.57,8.55,12.34,2.02z" />
      </g>
    </g>
  </svg>
)

const MaterialBedtime = props => <Icon as={MaterialBedtimeSvg} {...props} />

MaterialBedtime.defaultProps = { ...Icon.defaultProps }

MaterialBedtime.propTypes = { ...Icon.propTypes }

export default MaterialBedtime