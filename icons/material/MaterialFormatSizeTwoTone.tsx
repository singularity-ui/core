import React from 'react'

import Icon from '../Icon'

const MaterialFormatSizeTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 12h3v7h3v-7h3V9H3zm6-5h5v12h3V7h5V4H9z" />
  </svg>
)

const MaterialFormatSizeTwoTone = props => <Icon as={MaterialFormatSizeTwoToneSvg} {...props} />

MaterialFormatSizeTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialFormatSizeTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialFormatSizeTwoTone
