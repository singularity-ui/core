import React from 'react'

import Icon from '../Icon'

const MaterialAccessTimeFilledOutlinedSvg = props => (
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
      <path d="M11.99,2C6.47,2,2,6.48,2,12s4.47,10,9.99,10C17.52,22,22,17.52,22,12S17.52,2,11.99,2z M15.29,16.71L11,12.41V7h2v4.59 l3.71,3.71L15.29,16.71z" />
    </g>
  </svg>
)

const MaterialAccessTimeFilledOutlined = props => <Icon as={MaterialAccessTimeFilledOutlinedSvg} {...props} />

MaterialAccessTimeFilledOutlined.defaultProps = { ...Icon.defaultProps }

MaterialAccessTimeFilledOutlined.propTypes = { ...Icon.propTypes }

export default MaterialAccessTimeFilledOutlined