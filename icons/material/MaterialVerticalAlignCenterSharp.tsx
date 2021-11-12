import React from 'react'

import Icon from '../Icon'

const MaterialVerticalAlignCenterSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z" />
  </svg>
)

const MaterialVerticalAlignCenterSharp = props => <Icon as={MaterialVerticalAlignCenterSharpSvg} {...props} />

MaterialVerticalAlignCenterSharp.defaultProps = { ...Icon.defaultProps }

MaterialVerticalAlignCenterSharp.propTypes = { ...Icon.propTypes }

export default MaterialVerticalAlignCenterSharp
