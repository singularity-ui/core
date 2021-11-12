import React from 'react'

import Icon from '../Icon'

const MaterialFileUploadSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
  </svg>
)

const MaterialFileUpload = props => <Icon as={MaterialFileUploadSvg} {...props} />

MaterialFileUpload.defaultProps = { ...Icon.defaultProps }

MaterialFileUpload.propTypes = { ...Icon.propTypes }

export default MaterialFileUpload
