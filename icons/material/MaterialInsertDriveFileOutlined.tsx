import React from 'react'

import Icon from '../Icon'

const MaterialInsertDriveFileOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
  </svg>
)

const MaterialInsertDriveFileOutlined = props => <Icon as={MaterialInsertDriveFileOutlinedSvg} {...props} />

MaterialInsertDriveFileOutlined.defaultProps = { ...Icon.defaultProps }

MaterialInsertDriveFileOutlined.propTypes = { ...Icon.propTypes }

export default MaterialInsertDriveFileOutlined
