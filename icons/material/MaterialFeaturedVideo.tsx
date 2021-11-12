import React from 'react'

import Icon from '../Icon'

const MaterialFeaturedVideoSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H3V5h9v7z" />
  </svg>
)

const MaterialFeaturedVideo = props => <Icon as={MaterialFeaturedVideoSvg} {...props} />

MaterialFeaturedVideo.defaultProps = { ...Icon.defaultProps }

MaterialFeaturedVideo.propTypes = { ...Icon.propTypes }

export default MaterialFeaturedVideo
