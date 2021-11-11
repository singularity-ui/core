import React from 'react'

import Icon from '../Icon'

const MaterialDownloadDoneOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5 18h14v2H5v-2zm4.6-2.7L5 10.7l2-1.9 2.6 2.6L17 4l2 2-9.4 9.3z" />
  </svg>
)

const MaterialDownloadDoneOutlined = props => <Icon as={MaterialDownloadDoneOutlinedSvg} {...props} />

MaterialDownloadDoneOutlined.defaultProps = { ...Icon.defaultProps }

MaterialDownloadDoneOutlined.propTypes = { ...Icon.propTypes }

export default MaterialDownloadDoneOutlined
