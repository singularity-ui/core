import React from 'react'

import Icon from '../Icon'

const MaterialPinDropSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M5 20h14v2H5v-2zm7-13c-1.1 0-2 .9-2 2s.9 2 2 2a2 2 0 1 0 0-4zm0-5c3.27 0 7 2.46 7 7.15 0 3.12-2.33 6.41-7 9.85-4.67-3.44-7-6.73-7-9.85C5 4.46 8.73 2 12 2z"
      fill-rule="evenodd"
    />
  </svg>
)

const MaterialPinDropSharp = props => <Icon as={MaterialPinDropSharpSvg} {...props} />

MaterialPinDropSharp.defaultProps = { ...Icon.defaultProps }

MaterialPinDropSharp.propTypes = { ...Icon.propTypes }

export default MaterialPinDropSharp