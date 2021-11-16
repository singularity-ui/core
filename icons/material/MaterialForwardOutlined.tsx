import React from 'react'

import Icon from '../Icon'

const MaterialForwardOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M14 8.83L17.17 12 14 15.17V14H6v-4h8V8.83M12 4v4H4v8h8v4l8-8-8-8z" />
  </svg>
)

const MaterialForwardOutlined = props => <Icon as={MaterialForwardOutlinedSvg} {...props} />

MaterialForwardOutlined.defaultProps = { ...Icon.defaultProps }

MaterialForwardOutlined.propTypes = { ...Icon.propTypes }

export default MaterialForwardOutlined