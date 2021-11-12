import React from 'react'

import Icon from '../Icon'

const MaterialVerticalAlignCenterTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M11 1v4H8l4 4 4-4h-3V1zM4 11h16v2H4zm4 8h3v4h2v-4h3l-4-4z" />
  </svg>
)

const MaterialVerticalAlignCenterTwoTone = props => <Icon as={MaterialVerticalAlignCenterTwoToneSvg} {...props} />

MaterialVerticalAlignCenterTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialVerticalAlignCenterTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialVerticalAlignCenterTwoTone
