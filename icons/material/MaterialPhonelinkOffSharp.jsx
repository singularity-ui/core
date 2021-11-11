import React from 'react'

import Icon from '../Icon'

const MaterialPhonelinkOffSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
    <path d="M4.56 4l-2.5-2.49L4.56 4zM24 8h-8v4.61l2 2V10h4v7h-1.61l3 3H24zm-2-2V4H7.39l2 2zM2.06 1.51L.65 2.92 2 4.27V17H0v3h17.73l2.35 2.35 1.41-1.41L2.06 1.51zM4 17V6.27L14.73 17H4z" />
  </svg>
)

const MaterialPhonelinkOffSharp = props => <Icon as={MaterialPhonelinkOffSharpSvg} {...props} />

MaterialPhonelinkOffSharp.defaultProps = { ...Icon.defaultProps }

MaterialPhonelinkOffSharp.propTypes = { ...Icon.propTypes }

export default MaterialPhonelinkOffSharp