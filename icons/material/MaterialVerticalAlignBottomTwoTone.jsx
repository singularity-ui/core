import React from 'react'

import Icon from '../Icon'

const MaterialVerticalAlignBottomTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M11 3v10H8l4 4 4-4h-3V3zM4 19h16v2H4z" />
  </svg>
)

const MaterialVerticalAlignBottomTwoTone = props => <Icon as={MaterialVerticalAlignBottomTwoToneSvg} {...props} />

MaterialVerticalAlignBottomTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialVerticalAlignBottomTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialVerticalAlignBottomTwoTone
