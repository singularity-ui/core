import React from 'react'

import Icon from '../Icon'

const MaterialOutletSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M8,12V7h2v5H8z M14,18h-4l0-1.89 c0-1,0.68-1.92,1.66-2.08C12.92,13.82,14,14.79,14,16V18z M16,12h-2V7h2V12z" />
  </svg>
)

const MaterialOutletSharp = props => <Icon as={MaterialOutletSharpSvg} {...props} />

MaterialOutletSharp.defaultProps = { ...Icon.defaultProps }

MaterialOutletSharp.propTypes = { ...Icon.propTypes }

export default MaterialOutletSharp