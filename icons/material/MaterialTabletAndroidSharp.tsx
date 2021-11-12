import React from 'react'

import Icon from '../Icon'

const MaterialTabletAndroidSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
    <path d="M21 0H3v24h18V0zm-7 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z" />
  </svg>
)

const MaterialTabletAndroidSharp = props => <Icon as={MaterialTabletAndroidSharpSvg} {...props} />

MaterialTabletAndroidSharp.defaultProps = { ...Icon.defaultProps }

MaterialTabletAndroidSharp.propTypes = { ...Icon.propTypes }

export default MaterialTabletAndroidSharp
