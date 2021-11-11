import React from 'react'

import Icon from '../Icon'

const MaterialInsertPhotoOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z" />
  </svg>
)

const MaterialInsertPhotoOutlined = props => <Icon as={MaterialInsertPhotoOutlinedSvg} {...props} />

MaterialInsertPhotoOutlined.defaultProps = { ...Icon.defaultProps }

MaterialInsertPhotoOutlined.propTypes = { ...Icon.propTypes }

export default MaterialInsertPhotoOutlined