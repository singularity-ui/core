import React from 'react'

import Icon from '../Icon'

const MaterialReorderTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z" />
  </svg>
)

const MaterialReorderTwoTone = props => <Icon as={MaterialReorderTwoToneSvg} {...props} />

MaterialReorderTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialReorderTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialReorderTwoTone
