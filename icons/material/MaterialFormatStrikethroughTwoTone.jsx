import React from 'react'

import Icon from '../Icon'

const MaterialFormatStrikethroughTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 12h18v2H3zm11-2V7h5V4H5v3h5v3zm-4 6h4v3h-4z" />
  </svg>
)

const MaterialFormatStrikethroughTwoTone = props => <Icon as={MaterialFormatStrikethroughTwoToneSvg} {...props} />

MaterialFormatStrikethroughTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialFormatStrikethroughTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialFormatStrikethroughTwoTone