import React from 'react'

import Icon from '../Icon'

const MaterialCommentBankSharpSvg = props => (
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
      <path d="M2,2v20l4-4h16V2H2z M19,13l-2.5-1.5L14,13V5h5V13z" />
    </g>
  </svg>
)

const MaterialCommentBankSharp = props => <Icon as={MaterialCommentBankSharpSvg} {...props} />

MaterialCommentBankSharp.defaultProps = { ...Icon.defaultProps }

MaterialCommentBankSharp.propTypes = { ...Icon.propTypes }

export default MaterialCommentBankSharp
