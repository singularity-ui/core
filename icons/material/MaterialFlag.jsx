import React from 'react'

import Icon from '../Icon'

const MaterialFlagSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
  </svg>
)

const MaterialFlag = props => <Icon as={MaterialFlagSvg} {...props} />

MaterialFlag.defaultProps = { ...Icon.defaultProps }

MaterialFlag.propTypes = { ...Icon.propTypes }

export default MaterialFlag
