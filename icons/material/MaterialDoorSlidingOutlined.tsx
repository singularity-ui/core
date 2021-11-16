import React from 'react'

import Icon from '../Icon'

const MaterialDoorSlidingOutlinedSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <path d="M10,13H8v-2h2V13z M16,11h-2v2h2V11z M21,19v2H3v-2h1V5c0-1.1,0.9-2,2-2h12c1.1,0,2,0.9,2,2v14H21z M11,5H6v14h5V5z M18,5 h-5v14h5V5z" />
    </g>
  </svg>
)

const MaterialDoorSlidingOutlined = props => <Icon as={MaterialDoorSlidingOutlinedSvg} {...props} />

MaterialDoorSlidingOutlined.defaultProps = { ...Icon.defaultProps }

MaterialDoorSlidingOutlined.propTypes = { ...Icon.propTypes }

export default MaterialDoorSlidingOutlined