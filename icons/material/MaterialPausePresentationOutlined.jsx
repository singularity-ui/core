import React from 'react'

import Icon from '../Icon'

const MaterialPausePresentationOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3H3c-1.1 0-2 .85-2 1.95v14c0 1.1.9 2.05 2 2.05h18c1.1 0 2-.95 2-2.05v-14C23 3.85 22.1 3 21 3zm0 16H3V5h18v14zM9 8h2v8H9zm4 0h2v8h-2z" />
  </svg>
)

const MaterialPausePresentationOutlined = props => <Icon as={MaterialPausePresentationOutlinedSvg} {...props} />

MaterialPausePresentationOutlined.defaultProps = { ...Icon.defaultProps }

MaterialPausePresentationOutlined.propTypes = { ...Icon.propTypes }

export default MaterialPausePresentationOutlined
