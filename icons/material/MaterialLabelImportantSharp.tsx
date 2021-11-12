import React from 'react'

import Icon from '../Icon'

const MaterialLabelImportantSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4 18.99h12.04L21 12l-4.97-7H4l5 7-5 6.99z" />
  </svg>
)

const MaterialLabelImportantSharp = props => <Icon as={MaterialLabelImportantSharpSvg} {...props} />

MaterialLabelImportantSharp.defaultProps = { ...Icon.defaultProps }

MaterialLabelImportantSharp.propTypes = { ...Icon.propTypes }

export default MaterialLabelImportantSharp
