import React from 'react'

import Icon from '../Icon'

const MaterialForwardToInboxTwoToneSvg = props => (
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
      <path d="M13,18H4V8l8,5l8-5v5l-2,0C15.24,13,13,15.24,13,18L13,18z M12,11L4,6h16L12,11z" opacity=".3" />
      <path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h9v-2H4V8l8,5l8-5v5h2V6C22,4.9,21.1,4,20,4z M12,11L4,6h16L12,11z M19,15l4,4 l-4,4v-3h-4v-2h4V15z" />
    </g>
  </svg>
)

const MaterialForwardToInboxTwoTone = props => <Icon as={MaterialForwardToInboxTwoToneSvg} {...props} />

MaterialForwardToInboxTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialForwardToInboxTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialForwardToInboxTwoTone