import React from 'react'

import Icon from '../Icon'

const MaterialSdSharpSvg = props => (
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
      <path d="M2,4v16h20V4H2z M13,9h4c0.55,0,1,0.45,1,1v4c0,0.55-0.45,1-1,1h-4V9z M9.5,13.5v-1H6V9h5v2H9.5v-0.5h-2v1H11V15H6v-2h1.5 v0.5H9.5z M14.5,13.5h2v-3h-2V13.5z" />
    </g>
  </svg>
)

const MaterialSdSharp = props => <Icon as={MaterialSdSharpSvg} {...props} />

MaterialSdSharp.defaultProps = { ...Icon.defaultProps }

MaterialSdSharp.propTypes = { ...Icon.propTypes }

export default MaterialSdSharp