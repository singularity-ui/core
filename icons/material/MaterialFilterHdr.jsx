import React from 'react'

import Icon from '../Icon'

const MaterialFilterHdrSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" />
  </svg>
)

const MaterialFilterHdr = props => <Icon as={MaterialFilterHdrSvg} {...props} />

MaterialFilterHdr.defaultProps = { ...Icon.defaultProps }

MaterialFilterHdr.propTypes = { ...Icon.propTypes }

export default MaterialFilterHdr
