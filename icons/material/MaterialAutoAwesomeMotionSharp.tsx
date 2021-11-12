import React from 'react'

import Icon from '../Icon'

const MaterialAutoAwesomeMotionSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" x="0" />
    </g>
    <g>
      <g>
        <path d="M14,2H2v12h2V4h10V2z M18,6H6v12h2V8h10V6z M22,10H10v12h12V10z" />
      </g>
    </g>
  </svg>
)

const MaterialAutoAwesomeMotionSharp = props => <Icon as={MaterialAutoAwesomeMotionSharpSvg} {...props} />

MaterialAutoAwesomeMotionSharp.defaultProps = { ...Icon.defaultProps }

MaterialAutoAwesomeMotionSharp.propTypes = { ...Icon.propTypes }

export default MaterialAutoAwesomeMotionSharp
