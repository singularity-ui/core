import React from 'react'

import Icon from '../Icon'

const MaterialDashboardCustomizeSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <path d="M3,3h8v8H3V3z M13,3h8v8h-8V3z M3,13h8v8H3V13z M18,13h-2v3h-3v2h3v3h2v-3h3v-2h-3V13z" />
    </g>
  </svg>
)

const MaterialDashboardCustomizeSharp = props => <Icon as={MaterialDashboardCustomizeSharpSvg} {...props} />

MaterialDashboardCustomizeSharp.defaultProps = { ...Icon.defaultProps }

MaterialDashboardCustomizeSharp.propTypes = { ...Icon.propTypes }

export default MaterialDashboardCustomizeSharp
