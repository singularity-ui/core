import React from 'react'

import Icon from '../Icon'

const MaterialInsertDriveFileSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M4.01 2L4 22h16V8l-6-6H4.01zM13 9V3.5L18.5 9H13z" />
  </svg>
)

const MaterialInsertDriveFileSharp = props => <Icon as={MaterialInsertDriveFileSharpSvg} {...props} />

MaterialInsertDriveFileSharp.defaultProps = { ...Icon.defaultProps }

MaterialInsertDriveFileSharp.propTypes = { ...Icon.propTypes }

export default MaterialInsertDriveFileSharp
