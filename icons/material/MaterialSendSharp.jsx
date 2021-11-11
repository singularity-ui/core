import React from 'react'

import Icon from '../Icon'

const MaterialSendSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z" />
  </svg>
)

const MaterialSendSharp = props => <Icon as={MaterialSendSharpSvg} {...props} />

MaterialSendSharp.defaultProps = { ...Icon.defaultProps }

MaterialSendSharp.propTypes = { ...Icon.propTypes }

export default MaterialSendSharp