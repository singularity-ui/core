import React from 'react'

import Icon from '../Icon'

const MaterialPhoneAndroidSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 1H5v22h14V1zm-5 20h-4v-1h4v1zm3-3H7V4h10v14z" />
  </svg>
)

const MaterialPhoneAndroidSharp = props => <Icon as={MaterialPhoneAndroidSharpSvg} {...props} />

MaterialPhoneAndroidSharp.defaultProps = { ...Icon.defaultProps }

MaterialPhoneAndroidSharp.propTypes = { ...Icon.propTypes }

export default MaterialPhoneAndroidSharp
