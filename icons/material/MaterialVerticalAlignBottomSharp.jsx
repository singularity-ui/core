import React from 'react'

import Icon from '../Icon'

const MaterialVerticalAlignBottomSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z" />
  </svg>
)

const MaterialVerticalAlignBottomSharp = props => <Icon as={MaterialVerticalAlignBottomSharpSvg} {...props} />

MaterialVerticalAlignBottomSharp.defaultProps = { ...Icon.defaultProps }

MaterialVerticalAlignBottomSharp.propTypes = { ...Icon.propTypes }

export default MaterialVerticalAlignBottomSharp
