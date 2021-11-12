import React from 'react'

import Icon from '../Icon'

const MaterialSendSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
)

const MaterialSend = props => <Icon as={MaterialSendSvg} {...props} />

MaterialSend.defaultProps = { ...Icon.defaultProps }

MaterialSend.propTypes = { ...Icon.propTypes }

export default MaterialSend
