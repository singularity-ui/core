import React from 'react'

import Icon from '../Icon'

const MaterialAddToHomeScreenSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 1.01L6 1v5h2V5h10v14H8v-1H6v5h14V1.01zM10 15h2V8H5v2h3.59L3 15.59 4.41 17 10 11.41V15z" />
  </svg>
)

const MaterialAddToHomeScreenSharp = props => <Icon as={MaterialAddToHomeScreenSharpSvg} {...props} />

MaterialAddToHomeScreenSharp.defaultProps = { ...Icon.defaultProps }

MaterialAddToHomeScreenSharp.propTypes = { ...Icon.propTypes }

export default MaterialAddToHomeScreenSharp
