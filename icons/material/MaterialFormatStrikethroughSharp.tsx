import React from 'react'

import Icon from '../Icon'

const MaterialFormatStrikethroughSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z" />
  </svg>
)

const MaterialFormatStrikethroughSharp = props => <Icon as={MaterialFormatStrikethroughSharpSvg} {...props} />

MaterialFormatStrikethroughSharp.defaultProps = { ...Icon.defaultProps }

MaterialFormatStrikethroughSharp.propTypes = { ...Icon.propTypes }

export default MaterialFormatStrikethroughSharp
