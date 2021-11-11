import React from 'react'

import Icon from '../Icon'

const MaterialAspectRatioSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm16-6H1v18h22V3zm-2 16.01H3V4.99h18v14.02z" />
  </svg>
)

const MaterialAspectRatioSharp = props => <Icon as={MaterialAspectRatioSharpSvg} {...props} />

MaterialAspectRatioSharp.defaultProps = { ...Icon.defaultProps }

MaterialAspectRatioSharp.propTypes = { ...Icon.propTypes }

export default MaterialAspectRatioSharp
