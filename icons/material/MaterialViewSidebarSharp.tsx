import React from 'react'

import Icon from '../Icon'

const MaterialViewSidebarSharpSvg = props => (
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
      <path d="M16,20H2V4h14V20z M18,8h4V4h-4V8z M18,20h4v-4h-4V20z M18,14h4v-4h-4V14z" />
    </g>
  </svg>
)

const MaterialViewSidebarSharp = props => <Icon as={MaterialViewSidebarSharpSvg} {...props} />

MaterialViewSidebarSharp.defaultProps = { ...Icon.defaultProps }

MaterialViewSidebarSharp.propTypes = { ...Icon.propTypes }

export default MaterialViewSidebarSharp