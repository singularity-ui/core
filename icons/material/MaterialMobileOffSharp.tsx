import React from 'react'

import Icon from '../Icon'

const MaterialMobileOffSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17 5v8.61l2 2V1H5v.61L8.39 5zM2.9 2.35L1.49 3.76 5 7.27V23h14v-1.73l1.7 1.7 1.41-1.41L2.9 2.35zM7 19V9.27L16.73 19H7z" />
  </svg>
)

const MaterialMobileOffSharp = props => <Icon as={MaterialMobileOffSharpSvg} {...props} />

MaterialMobileOffSharp.defaultProps = { ...Icon.defaultProps }

MaterialMobileOffSharp.propTypes = { ...Icon.propTypes }

export default MaterialMobileOffSharp