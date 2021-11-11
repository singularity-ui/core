import React from 'react'

import Icon from '../Icon'

const MaterialFormatTextdirectionRToLOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 4v4c-1.1 0-2-.9-2-2s.9-2 2-2m8-2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4v5h2V4h2v11h2V4h2V2zM8 14l-4 4 4 4v-3h12v-2H8v-3z" />
  </svg>
)

const MaterialFormatTextdirectionRToLOutlined = props => (
  <Icon as={MaterialFormatTextdirectionRToLOutlinedSvg} {...props} />
)

MaterialFormatTextdirectionRToLOutlined.defaultProps = { ...Icon.defaultProps }

MaterialFormatTextdirectionRToLOutlined.propTypes = { ...Icon.propTypes }

export default MaterialFormatTextdirectionRToLOutlined
