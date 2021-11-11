import React from 'react'

import Icon from '../Icon'

const MaterialFormatAlignRightTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 3h18v2H3zm0 16h18v2H3zm0-8h18v2H3zm6 4h12v2H9zm0-8h12v2H9z" />
  </svg>
)

const MaterialFormatAlignRightTwoTone = props => <Icon as={MaterialFormatAlignRightTwoToneSvg} {...props} />

MaterialFormatAlignRightTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialFormatAlignRightTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialFormatAlignRightTwoTone
