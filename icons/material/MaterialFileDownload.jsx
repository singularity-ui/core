import React from 'react'

import Icon from '../Icon'

const MaterialFileDownloadSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
  </svg>
)

const MaterialFileDownload = props => <Icon as={MaterialFileDownloadSvg} {...props} />

MaterialFileDownload.defaultProps = { ...Icon.defaultProps }

MaterialFileDownload.propTypes = { ...Icon.propTypes }

export default MaterialFileDownload
