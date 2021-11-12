import React from 'react'

import Icon from '../Icon'

const MaterialBorderColorSharpSvg = props => (
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
      <path
        d="M22,24H2v-4h20V24z M13.06,5.19l3.75,3.75L7.75,18H4v-3.75L13.06,5.19z M17.88,7.87 l-3.75-3.75l2.53-2.54l3.75,3.75L17.88,7.87z"
        enable-background="new"
      />
    </g>
  </svg>
)

const MaterialBorderColorSharp = props => <Icon as={MaterialBorderColorSharpSvg} {...props} />

MaterialBorderColorSharp.defaultProps = { ...Icon.defaultProps }

MaterialBorderColorSharp.propTypes = { ...Icon.propTypes }

export default MaterialBorderColorSharp
