import React from 'react'

import Icon from '../Icon'

const MaterialFormatAlignCenterTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 3h18v2H3zm4 12h10v2H7zm0-8h10v2H7zm-4 4h18v2H3zm0 8h18v2H3z" />
  </svg>
)

const MaterialFormatAlignCenterTwoTone = props => <Icon as={MaterialFormatAlignCenterTwoToneSvg} {...props} />

MaterialFormatAlignCenterTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialFormatAlignCenterTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialFormatAlignCenterTwoTone