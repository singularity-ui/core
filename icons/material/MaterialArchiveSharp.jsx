import React from 'react'

import Icon from '../Icon'

const MaterialArchiveSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M18.71 3H5.29L3 5.79V21h18V5.79L18.71 3zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z" />
  </svg>
)

const MaterialArchiveSharp = props => <Icon as={MaterialArchiveSharpSvg} {...props} />

MaterialArchiveSharp.defaultProps = { ...Icon.defaultProps }

MaterialArchiveSharp.propTypes = { ...Icon.propTypes }

export default MaterialArchiveSharp