import React from 'react'

import Icon from '../Icon'

const MaterialBookmarkAddSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M21,7h-2v2h-2V7h-2V5h2V3h2v2h2V7z M19,21l-7-3l-7,3V3l9,0c-0.63,0.84-1,1.87-1,3c0,2.76,2.24,5,5,5c0.34,0,0.68-0.03,1-0.1 V21z" />
  </svg>
)

const MaterialBookmarkAddSharp = props => <Icon as={MaterialBookmarkAddSharpSvg} {...props} />

MaterialBookmarkAddSharp.defaultProps = { ...Icon.defaultProps }

MaterialBookmarkAddSharp.propTypes = { ...Icon.propTypes }

export default MaterialBookmarkAddSharp