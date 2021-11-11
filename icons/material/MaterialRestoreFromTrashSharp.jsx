import React from 'react'

import Icon from '../Icon'

const MaterialRestoreFromTrashSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M6 21h12V7H6v14zm6-11l4 4h-2v4h-4v-4H8l4-4zm3.5-6l-1-1h-5l-1 1H5v2h14V4z" />
  </svg>
)

const MaterialRestoreFromTrashSharp = props => <Icon as={MaterialRestoreFromTrashSharpSvg} {...props} />

MaterialRestoreFromTrashSharp.defaultProps = { ...Icon.defaultProps }

MaterialRestoreFromTrashSharp.propTypes = { ...Icon.propTypes }

export default MaterialRestoreFromTrashSharp