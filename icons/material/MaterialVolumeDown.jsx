import React from 'react'

import Icon from '../Icon'

const MaterialVolumeDownSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z" />
  </svg>
)

const MaterialVolumeDown = props => <Icon as={MaterialVolumeDownSvg} {...props} />

MaterialVolumeDown.defaultProps = { ...Icon.defaultProps }

MaterialVolumeDown.propTypes = { ...Icon.propTypes }

export default MaterialVolumeDown