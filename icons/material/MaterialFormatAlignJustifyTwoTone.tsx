import React from 'react'

import Icon from '../Icon'

const MaterialFormatAlignJustifyTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 3h18v2H3zm0 8h18v2H3zm0 8h18v2H3zm0-4h18v2H3zm0-8h18v2H3z" />
  </svg>
)

const MaterialFormatAlignJustifyTwoTone = props => <Icon as={MaterialFormatAlignJustifyTwoToneSvg} {...props} />

MaterialFormatAlignJustifyTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialFormatAlignJustifyTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialFormatAlignJustifyTwoTone
