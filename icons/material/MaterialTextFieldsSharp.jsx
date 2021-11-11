import React from 'react'

import Icon from '../Icon'

const MaterialTextFieldsSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z" />
  </svg>
)

const MaterialTextFieldsSharp = props => <Icon as={MaterialTextFieldsSharpSvg} {...props} />

MaterialTextFieldsSharp.defaultProps = { ...Icon.defaultProps }

MaterialTextFieldsSharp.propTypes = { ...Icon.propTypes }

export default MaterialTextFieldsSharp