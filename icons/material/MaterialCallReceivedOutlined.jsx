import React from 'react'

import Icon from '../Icon'

const MaterialCallReceivedOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41L20 5.41z" />
  </svg>
)

const MaterialCallReceivedOutlined = props => <Icon as={MaterialCallReceivedOutlinedSvg} {...props} />

MaterialCallReceivedOutlined.defaultProps = { ...Icon.defaultProps }

MaterialCallReceivedOutlined.propTypes = { ...Icon.propTypes }

export default MaterialCallReceivedOutlined
