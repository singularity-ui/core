import React from 'react'

import Icon from '../Icon'

const MaterialBrightnessOneRoundedSvg = props => (
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
        <g>
          <g>
            <circle cx="12" cy="12" r="10" />
          </g>
        </g>
      </g>
    </g>
  </svg>
)

const MaterialBrightnessOneRounded = props => <Icon as={MaterialBrightnessOneRoundedSvg} {...props} />

MaterialBrightnessOneRounded.defaultProps = { ...Icon.defaultProps }

MaterialBrightnessOneRounded.propTypes = { ...Icon.propTypes }

export default MaterialBrightnessOneRounded
