import React from 'react'

import Icon from '../Icon'

const MaterialBorderStyleSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M15 21h2v-2h-2v2zm4 0h2v-2h-2v2zM7 21h2v-2H7v2zm4 0h2v-2h-2v2zm8-4h2v-2h-2v2zm0-4h2v-2h-2v2zM3 3v18h2V5h16V3H3zm16 6h2V7h-2v2z" />
  </svg>
)

const MaterialBorderStyle = props => <Icon as={MaterialBorderStyleSvg} {...props} />

MaterialBorderStyle.defaultProps = { ...Icon.defaultProps }

MaterialBorderStyle.propTypes = { ...Icon.propTypes }

export default MaterialBorderStyle