import React from 'react'

import Icon from '../Icon'

const MaterialTextSnippetSharpSvg = props => (
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
      <path d="M21,9l-6-6H3v18h18V9z M7,7h7v2H7V7z M17,17H7v-2h10V17z M17,13H7v-2h10V13z" />
    </g>
  </svg>
)

const MaterialTextSnippetSharp = props => <Icon as={MaterialTextSnippetSharpSvg} {...props} />

MaterialTextSnippetSharp.defaultProps = { ...Icon.defaultProps }

MaterialTextSnippetSharp.propTypes = { ...Icon.propTypes }

export default MaterialTextSnippetSharp
