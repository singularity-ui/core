import React from 'react'

import Icon from '../Icon'

const MaterialBorderOuterSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M13 7h-2v2h2V7zm0 4h-2v2h2v-2zm4 0h-2v2h2v-2zM3 3v18h18V3H3zm16 16H5V5h14v14zm-6-4h-2v2h2v-2zm-4-4H7v2h2v-2z" />
  </svg>
)

const MaterialBorderOuter = props => <Icon as={MaterialBorderOuterSvg} {...props} />

MaterialBorderOuter.defaultProps = { ...Icon.defaultProps }

MaterialBorderOuter.propTypes = { ...Icon.propTypes }

export default MaterialBorderOuter
