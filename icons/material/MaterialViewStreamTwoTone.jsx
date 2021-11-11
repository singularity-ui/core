import React from 'react'

import Icon from '../Icon'

const MaterialViewStreamTwoToneSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M19,17H5v-4h14V17z M5,11V7h14v4H5z" opacity=".3" />
    <path d="M3,7v10c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V7c0-1.1-0.9-2-2-2H5C3.9,5,3,5.9,3,7z M19,17H5v-4h14V17z M5,11V7h14v4H5z" />
  </svg>
)

const MaterialViewStreamTwoTone = props => <Icon as={MaterialViewStreamTwoToneSvg} {...props} />

MaterialViewStreamTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialViewStreamTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialViewStreamTwoTone
