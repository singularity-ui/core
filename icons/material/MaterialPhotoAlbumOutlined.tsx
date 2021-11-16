import React from 'react'

import Icon from '../Icon'

const MaterialPhotoAlbumOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 2v5l-1-.75L9 9V4h2zm7 16H6V4h1v9l3-2.25L13 13V4h5v16zm-6.72-2.04L9.5 15.81 7 19h10l-3.22-4.26z" />
  </svg>
)

const MaterialPhotoAlbumOutlined = props => <Icon as={MaterialPhotoAlbumOutlinedSvg} {...props} />

MaterialPhotoAlbumOutlined.defaultProps = { ...Icon.defaultProps }

MaterialPhotoAlbumOutlined.propTypes = { ...Icon.propTypes }

export default MaterialPhotoAlbumOutlined