import React from 'react'

import Icon from '../Icon'

const MaterialVerticalAlignCenterOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z" />
  </svg>
)

const MaterialVerticalAlignCenterOutlined = props => <Icon as={MaterialVerticalAlignCenterOutlinedSvg} {...props} />

MaterialVerticalAlignCenterOutlined.defaultProps = { ...Icon.defaultProps }

MaterialVerticalAlignCenterOutlined.propTypes = { ...Icon.propTypes }

export default MaterialVerticalAlignCenterOutlined
