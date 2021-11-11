import React from 'react'

import Icon from '../Icon'

const MaterialFileDownloadSharpSvg = props => (
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
      <path d="M19,9h-4V3H9v6H5l7,7L19,9z M5,18v2h14v-2H5z" />
    </g>
  </svg>
)

const MaterialFileDownloadSharp = props => <Icon as={MaterialFileDownloadSharpSvg} {...props} />

MaterialFileDownloadSharp.defaultProps = { ...Icon.defaultProps }

MaterialFileDownloadSharp.propTypes = { ...Icon.propTypes }

export default MaterialFileDownloadSharp
