import React from 'react'

import Icon from '../Icon'

const MaterialHideImageSvg = props => (
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
        <path d="M21,5c0-1.1-0.9-2-2-2H5.83L21,18.17V5z" />
        <path d="M2.81,2.81L1.39,4.22L3,5.83V19c0,1.1,0.9,2,2,2h13.17l1.61,1.61l1.41-1.41L2.81,2.81z M6,17l3-4l2.25,3l0.82-1.1l2.1,2.1 H6z" />
      </g>
    </g>
  </svg>
)

const MaterialHideImage = props => <Icon as={MaterialHideImageSvg} {...props} />

MaterialHideImage.defaultProps = { ...Icon.defaultProps }

MaterialHideImage.propTypes = { ...Icon.propTypes }

export default MaterialHideImage
