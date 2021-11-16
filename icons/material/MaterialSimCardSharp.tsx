import React from 'react'

import Icon from '../Icon'

const MaterialSimCardSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19.99 2H10L4 8v14h16l-.01-20zM9 19H7v-2h2v2zm8 0h-2v-2h2v2zm-8-4H7v-4h2v4zm4 4h-2v-4h2v4zm0-6h-2v-2h2v2zm4 2h-2v-4h2v4z" />
  </svg>
)

const MaterialSimCardSharp = props => <Icon as={MaterialSimCardSharpSvg} {...props} />

MaterialSimCardSharp.defaultProps = { ...Icon.defaultProps }

MaterialSimCardSharp.propTypes = { ...Icon.propTypes }

export default MaterialSimCardSharp