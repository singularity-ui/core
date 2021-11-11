import React from 'react'

import Icon from '../Icon'

const MaterialBookmarkSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 3H5v18l7-3 7 3V3z" />
  </svg>
)

const MaterialBookmarkSharp = props => <Icon as={MaterialBookmarkSharpSvg} {...props} />

MaterialBookmarkSharp.defaultProps = { ...Icon.defaultProps }

MaterialBookmarkSharp.propTypes = { ...Icon.propTypes }

export default MaterialBookmarkSharp
