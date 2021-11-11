import React from 'react'

import Icon from '../Icon'

const MaterialPhoneCallbackSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15.73 14.85l-2.52 2.52c-2.83-1.44-5.15-3.75-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51l-5.27-.61zM18 9h-2.59l5.02-5.02-1.41-1.41L14 7.59V5h-2v6h6z" />
  </svg>
)

const MaterialPhoneCallbackSharp = props => <Icon as={MaterialPhoneCallbackSharpSvg} {...props} />

MaterialPhoneCallbackSharp.defaultProps = { ...Icon.defaultProps }

MaterialPhoneCallbackSharp.propTypes = { ...Icon.propTypes }

export default MaterialPhoneCallbackSharp
