import React from 'react'

import Icon from '../Icon'

const MaterialTodaySharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3h-3V1h-2v2H8V1H6v2H3v18h18V3zm-2 16H5V8h14v11zM7 10h5v5H7v-5z" />
  </svg>
)

const MaterialTodaySharp = props => <Icon as={MaterialTodaySharpSvg} {...props} />

MaterialTodaySharp.defaultProps = { ...Icon.defaultProps }

MaterialTodaySharp.propTypes = { ...Icon.propTypes }

export default MaterialTodaySharp
