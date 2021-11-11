import React from 'react'

import Icon from '../Icon'

const MaterialPhotoLibrarySvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" />
  </svg>
)

const MaterialPhotoLibrary = props => <Icon as={MaterialPhotoLibrarySvg} {...props} />

MaterialPhotoLibrary.defaultProps = { ...Icon.defaultProps }

MaterialPhotoLibrary.propTypes = { ...Icon.propTypes }

export default MaterialPhotoLibrary
