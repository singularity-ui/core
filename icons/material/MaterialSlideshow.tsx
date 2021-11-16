import React from 'react'

import Icon from '../Icon'

const MaterialSlideshowSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M10 8v8l5-4-5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
  </svg>
)

const MaterialSlideshow = props => <Icon as={MaterialSlideshowSvg} {...props} />

MaterialSlideshow.defaultProps = { ...Icon.defaultProps }

MaterialSlideshow.propTypes = { ...Icon.propTypes }

export default MaterialSlideshow