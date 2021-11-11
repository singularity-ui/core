import React from 'react'

import Icon from '../Icon'

const MaterialPanoramaVerticalSelectSharpSvg = props => (
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
      <path d="M18.49,11.99c0-5.25,1.54-9.01,1.92-10l-16.82,0c0.76,2.16,1.9,5.21,1.9,10c0,4.78-1.17,7.91-1.9,10l16.81,0 C19.66,19.91,18.49,16.76,18.49,11.99z" />
    </g>
  </svg>
)

const MaterialPanoramaVerticalSelectSharp = props => <Icon as={MaterialPanoramaVerticalSelectSharpSvg} {...props} />

MaterialPanoramaVerticalSelectSharp.defaultProps = { ...Icon.defaultProps }

MaterialPanoramaVerticalSelectSharp.propTypes = { ...Icon.propTypes }

export default MaterialPanoramaVerticalSelectSharp