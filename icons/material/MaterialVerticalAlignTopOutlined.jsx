import React from 'react'

import Icon from '../Icon'

const MaterialVerticalAlignTopOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z" />
  </svg>
)

const MaterialVerticalAlignTopOutlined = props => <Icon as={MaterialVerticalAlignTopOutlinedSvg} {...props} />

MaterialVerticalAlignTopOutlined.defaultProps = { ...Icon.defaultProps }

MaterialVerticalAlignTopOutlined.propTypes = { ...Icon.propTypes }

export default MaterialVerticalAlignTopOutlined
