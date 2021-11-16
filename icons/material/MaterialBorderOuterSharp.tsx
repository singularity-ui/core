import React from 'react'

import Icon from '../Icon'

const MaterialBorderOuterSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M13 7h-2v2h2V7zm0 4h-2v2h2v-2zm4 0h-2v2h2v-2zM3 3v18h18V3H3zm16 16H5V5h14v14zm-6-4h-2v2h2v-2zm-4-4H7v2h2v-2z" />
  </svg>
)

const MaterialBorderOuterSharp = props => <Icon as={MaterialBorderOuterSharpSvg} {...props} />

MaterialBorderOuterSharp.defaultProps = { ...Icon.defaultProps }

MaterialBorderOuterSharp.propTypes = { ...Icon.propTypes }

export default MaterialBorderOuterSharp