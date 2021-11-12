import React from 'react'

import Icon from '../Icon'

const MaterialUpgradeSharpSvg = props => (
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
      <path d="M16,18v2H8v-2H16z M11,7.99V16h2V7.99h3L12,4L8,7.99H11z" />
    </g>
  </svg>
)

const MaterialUpgradeSharp = props => <Icon as={MaterialUpgradeSharpSvg} {...props} />

MaterialUpgradeSharp.defaultProps = { ...Icon.defaultProps }

MaterialUpgradeSharp.propTypes = { ...Icon.propTypes }

export default MaterialUpgradeSharp
