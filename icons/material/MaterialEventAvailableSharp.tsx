import React from 'react'

import Icon from '../Icon'

const MaterialEventAvailableSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM21 3h-3V1h-2v2H8V1H6v2H3v18h18V3zm-2 16H5V8h14v11z" />
  </svg>
)

const MaterialEventAvailableSharp = props => <Icon as={MaterialEventAvailableSharpSvg} {...props} />

MaterialEventAvailableSharp.defaultProps = { ...Icon.defaultProps }

MaterialEventAvailableSharp.propTypes = { ...Icon.propTypes }

export default MaterialEventAvailableSharp
