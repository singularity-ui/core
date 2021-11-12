import React from 'react'

import Icon from '../Icon'

const MaterialAccountTreeSharpSvg = props => (
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
    <polygon points="22,11 22,3 15,3 15,6 9,6 9,3 2,3 2,11 9,11 9,8 11,8 11,18 15,18 15,21 22,21 22,13 15,13 15,16 13,16 13,8 15,8 15,11" />
  </svg>
)

const MaterialAccountTreeSharp = props => <Icon as={MaterialAccountTreeSharpSvg} {...props} />

MaterialAccountTreeSharp.defaultProps = { ...Icon.defaultProps }

MaterialAccountTreeSharp.propTypes = { ...Icon.propTypes }

export default MaterialAccountTreeSharp
