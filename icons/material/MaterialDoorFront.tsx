import React from 'react'

import Icon from '../Icon'

const MaterialDoorFrontSvg = props => (
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
      <path d="M19,19V5c0-1.1-0.9-2-2-2H7C5.9,3,5,3.9,5,5v14H3v2h18v-2H19z M15,13h-2v-2h2V13z" />
    </g>
  </svg>
)

const MaterialDoorFront = props => <Icon as={MaterialDoorFrontSvg} {...props} />

MaterialDoorFront.defaultProps = { ...Icon.defaultProps }

MaterialDoorFront.propTypes = { ...Icon.propTypes }

export default MaterialDoorFront