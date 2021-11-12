import React from 'react'

import Icon from '../Icon'

const MaterialAutoAwesomeMosaicRoundedSvg = props => (
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
        <path d="M3,5v14c0,1.1,0.89,2,2,2h6V3H5C3.89,3,3,3.9,3,5z M19,3h-6v8h8V5C21,3.9,20.1,3,19,3z M13,21h6c1.1,0,2-0.9,2-2v-6h-8V21 z" />
      </g>
    </g>
  </svg>
)

const MaterialAutoAwesomeMosaicRounded = props => <Icon as={MaterialAutoAwesomeMosaicRoundedSvg} {...props} />

MaterialAutoAwesomeMosaicRounded.defaultProps = { ...Icon.defaultProps }

MaterialAutoAwesomeMosaicRounded.propTypes = { ...Icon.propTypes }

export default MaterialAutoAwesomeMosaicRounded
