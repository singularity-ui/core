import React from 'react'

import Icon from '../Icon'

const MaterialCloudDownloadRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-4.65 4.65c-.2.2-.51.2-.71 0L7 13h3V9h4v4h3z" />
  </svg>
)

const MaterialCloudDownloadRounded = props => <Icon as={MaterialCloudDownloadRoundedSvg} {...props} />

MaterialCloudDownloadRounded.defaultProps = { ...Icon.defaultProps }

MaterialCloudDownloadRounded.propTypes = { ...Icon.propTypes }

export default MaterialCloudDownloadRounded