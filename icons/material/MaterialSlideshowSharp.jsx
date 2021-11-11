import React from 'react'

import Icon from '../Icon'

const MaterialSlideshowSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 8v8l5-4-5-4zm11-5H3v18h18V3zm-2 16H5V5h14v14z" />
  </svg>
)

const MaterialSlideshowSharp = props => <Icon as={MaterialSlideshowSharpSvg} {...props} />

MaterialSlideshowSharp.defaultProps = { ...Icon.defaultProps }

MaterialSlideshowSharp.propTypes = { ...Icon.propTypes }

export default MaterialSlideshowSharp
