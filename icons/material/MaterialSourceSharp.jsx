import React from 'react'

import Icon from '../Icon'

const MaterialSourceSharpSvg = props => (
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
      <path d="M12,6l-2-2H2v16h20V6H12z M14,16H6v-2h8V16z M18,12H6v-2h12V12z" />
    </g>
  </svg>
)

const MaterialSourceSharp = props => <Icon as={MaterialSourceSharpSvg} {...props} />

MaterialSourceSharp.defaultProps = { ...Icon.defaultProps }

MaterialSourceSharp.propTypes = { ...Icon.propTypes }

export default MaterialSourceSharp
