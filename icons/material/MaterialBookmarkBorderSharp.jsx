import React from 'react'

import Icon from '../Icon'

const MaterialBookmarkBorderSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 3H5v18l7-3 7 3V3zm-2 15l-5-2.18L7 18V5h10v13z" />
  </svg>
)

const MaterialBookmarkBorderSharp = props => <Icon as={MaterialBookmarkBorderSharpSvg} {...props} />

MaterialBookmarkBorderSharp.defaultProps = { ...Icon.defaultProps }

MaterialBookmarkBorderSharp.propTypes = { ...Icon.propTypes }

export default MaterialBookmarkBorderSharp