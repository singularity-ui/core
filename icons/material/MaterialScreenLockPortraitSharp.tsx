import React from 'react'

import Icon from '../Icon'

const MaterialScreenLockPortraitSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M9 16h6v-5h-1v-.9c0-1-.69-1.92-1.68-2.08C11.07 7.83 10 8.79 10 10v1H9v5zm1.8-6c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2v1h-2.4v-1zM19 1H5v22h14V1zm-2 18H7V5h10v14z" />
  </svg>
)

const MaterialScreenLockPortraitSharp = props => <Icon as={MaterialScreenLockPortraitSharpSvg} {...props} />

MaterialScreenLockPortraitSharp.defaultProps = { ...Icon.defaultProps }

MaterialScreenLockPortraitSharp.propTypes = { ...Icon.propTypes }

export default MaterialScreenLockPortraitSharp