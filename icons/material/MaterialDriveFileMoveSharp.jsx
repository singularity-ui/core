import React from 'react'

import Icon from '../Icon'

const MaterialDriveFileMoveSharpSvg = props => (
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
      <path d="M22,6H12l-2-2H2v16h20V6z M12,17v-3H8v-2h4V9l4,4L12,17z" />
    </g>
  </svg>
)

const MaterialDriveFileMoveSharp = props => <Icon as={MaterialDriveFileMoveSharpSvg} {...props} />

MaterialDriveFileMoveSharp.defaultProps = { ...Icon.defaultProps }

MaterialDriveFileMoveSharp.propTypes = { ...Icon.propTypes }

export default MaterialDriveFileMoveSharp
