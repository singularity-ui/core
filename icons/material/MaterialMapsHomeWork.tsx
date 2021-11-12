import React from 'react'

import Icon from '../Icon'

const MaterialMapsHomeWorkSvg = props => (
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
      <g>
        <polygon points="1,11 1,21 6,21 6,15 10,15 10,21 15,21 15,11 8,6" />
        <path d="M10,3v1.97l7,5V11h2v2h-2v2h2v2h-2v4h6V3H10z M19,9h-2V7h2V9z" />
      </g>
    </g>
  </svg>
)

const MaterialMapsHomeWork = props => <Icon as={MaterialMapsHomeWorkSvg} {...props} />

MaterialMapsHomeWork.defaultProps = { ...Icon.defaultProps }

MaterialMapsHomeWork.propTypes = { ...Icon.propTypes }

export default MaterialMapsHomeWork
