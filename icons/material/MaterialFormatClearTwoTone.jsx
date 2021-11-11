import React from 'react'

import Icon from '../Icon'

const MaterialFormatClearTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 8V5H6.39l3 3h1.83l-.55 1.28 2.09 2.1L14.21 8zM3.41 4.86L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21l1.41-1.41z" />
  </svg>
)

const MaterialFormatClearTwoTone = props => <Icon as={MaterialFormatClearTwoToneSvg} {...props} />

MaterialFormatClearTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialFormatClearTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialFormatClearTwoTone
