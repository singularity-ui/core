import React from 'react'

import Icon from '../Icon'

const MaterialLabelSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17.03 5L3 5.01v13.98l14.03.01L22 12l-4.97-7z" />
  </svg>
)

const MaterialLabelSharp = props => <Icon as={MaterialLabelSharpSvg} {...props} />

MaterialLabelSharp.defaultProps = { ...Icon.defaultProps }

MaterialLabelSharp.propTypes = { ...Icon.propTypes }

export default MaterialLabelSharp
