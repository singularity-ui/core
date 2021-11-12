import React from 'react'

import Icon from '../Icon'

const MaterialEqualizerSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z" />
  </svg>
)

const MaterialEqualizerSharp = props => <Icon as={MaterialEqualizerSharpSvg} {...props} />

MaterialEqualizerSharp.defaultProps = { ...Icon.defaultProps }

MaterialEqualizerSharp.propTypes = { ...Icon.propTypes }

export default MaterialEqualizerSharp
