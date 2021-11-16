import React from 'react'

import Icon from '../Icon'

const MaterialVerticalAlignBottomOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z" />
  </svg>
)

const MaterialVerticalAlignBottomOutlined = props => <Icon as={MaterialVerticalAlignBottomOutlinedSvg} {...props} />

MaterialVerticalAlignBottomOutlined.defaultProps = { ...Icon.defaultProps }

MaterialVerticalAlignBottomOutlined.propTypes = { ...Icon.propTypes }

export default MaterialVerticalAlignBottomOutlined