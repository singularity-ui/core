import React from 'react'

import Icon from '../Icon'

const MaterialControlCameraTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7.3 13.77L5.54 12l1.76-1.77-1.76-1.77L2 12l3.54 3.54zm8.24 4.69l-1.77-1.76L12 18.46l-1.77-1.76-1.77 1.76L12 22zm2.92-2.92L22 12l-3.54-3.54-1.76 1.77L18.46 12l-1.76 1.77zM12 5.54l1.77 1.76 1.77-1.76L12 2 8.46 5.54l1.77 1.76z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const MaterialControlCameraTwoTone = props => <Icon as={MaterialControlCameraTwoToneSvg} {...props} />

MaterialControlCameraTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialControlCameraTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialControlCameraTwoTone