import React from 'react'

import Icon from '../Icon'

const MaterialFaceRetouchingOffSharpSvg = props => (
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
        <circle cx="9" cy="13" r="1.25" />
        <path d="M17.5,10c0.75,0,1.47-0.09,2.17-0.24C19.88,10.47,20,11.22,20,12c0,1.22-0.28,2.37-0.77,3.4l1.49,1.49 C21.53,15.44,22,13.78,22,12c0-5.52-4.48-10-10-10c-1.78,0-3.44,0.47-4.89,1.28l5.33,5.33C13.93,9.49,15.65,10,17.5,10z" />
        <path d="M1.89,3.72l2.19,2.19C2.78,7.6,2,9.71,2,12c0,5.52,4.48,10,10,10c2.29,0,4.4-0.78,6.09-2.08l2.19,2.19l1.41-1.41 L3.31,2.31L1.89,3.72z M16.66,18.49C15.35,19.44,13.74,20,12,20c-4.41,0-8-3.59-8-8c0-0.05,0.01-0.1,0-0.14 c1.39-0.52,2.63-1.35,3.64-2.39L16.66,18.49z" />
      </g>
    </g>
  </svg>
)

const MaterialFaceRetouchingOffSharp = props => <Icon as={MaterialFaceRetouchingOffSharpSvg} {...props} />

MaterialFaceRetouchingOffSharp.defaultProps = { ...Icon.defaultProps }

MaterialFaceRetouchingOffSharp.propTypes = { ...Icon.propTypes }

export default MaterialFaceRetouchingOffSharp