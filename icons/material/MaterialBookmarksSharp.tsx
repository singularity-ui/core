import React from 'react'

import Icon from '../Icon'

const MaterialBookmarksSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 18l2 1V1H7v2h12v15zM17 5H3v18l7-3 7 3V5z" />
  </svg>
)

const MaterialBookmarksSharp = props => <Icon as={MaterialBookmarksSharpSvg} {...props} />

MaterialBookmarksSharp.defaultProps = { ...Icon.defaultProps }

MaterialBookmarksSharp.propTypes = { ...Icon.propTypes }

export default MaterialBookmarksSharp
