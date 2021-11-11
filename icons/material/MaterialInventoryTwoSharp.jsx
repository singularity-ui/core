import React from 'react'

import Icon from '../Icon'

const MaterialInventoryTwoSharpSvg = props => (
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
      <path d="M2,2v6.7h1V22h18V8.7h1V2H2z M15,14H9v-2h6V14z M20,7H4V4h16V7z" />
    </g>
  </svg>
)

const MaterialInventoryTwoSharp = props => <Icon as={MaterialInventoryTwoSharpSvg} {...props} />

MaterialInventoryTwoSharp.defaultProps = { ...Icon.defaultProps }

MaterialInventoryTwoSharp.propTypes = { ...Icon.propTypes }

export default MaterialInventoryTwoSharp