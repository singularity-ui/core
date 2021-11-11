import React from 'react'

import Icon from '../Icon'

const MaterialIosShareSharpSvg = props => (
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
        <polygon points="20,8 15,8 15,10 18,10 18,21 6,21 6,10 9,10 9,8 4,8 4,23 20,23" />
        <polygon points="11,16 13,16 13,5 16,5 12,1 8,5 11,5" />
      </g>
    </g>
  </svg>
)

const MaterialIosShareSharp = props => <Icon as={MaterialIosShareSharpSvg} {...props} />

MaterialIosShareSharp.defaultProps = { ...Icon.defaultProps }

MaterialIosShareSharp.propTypes = { ...Icon.propTypes }

export default MaterialIosShareSharp