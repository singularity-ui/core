import React from 'react'

import Icon from '../Icon'

const MaterialLineWeightSvg = props => (
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
    </g>
    <g>
      <g>
        <g>
          <path d="M3,17h18v-2H3V17z M3,20h18v-1H3V20z M3,13h18v-3H3V13z M3,4v4h18V4H3z" />
        </g>
      </g>
    </g>
  </svg>
)

const MaterialLineWeight = props => <Icon as={MaterialLineWeightSvg} {...props} />

MaterialLineWeight.defaultProps = { ...Icon.defaultProps }

MaterialLineWeight.propTypes = { ...Icon.propTypes }

export default MaterialLineWeight