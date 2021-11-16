import React from 'react'

import Icon from '../Icon'

const MaterialBurstModeOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M1 5h2v14H1zm4 0h2v14H5zm17 0H10c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-1 12H11V7h10v10zm-3.57-4.38l-2 2.57L14 13.47l-2 2.52h8z" />
  </svg>
)

const MaterialBurstModeOutlined = props => <Icon as={MaterialBurstModeOutlinedSvg} {...props} />

MaterialBurstModeOutlined.defaultProps = { ...Icon.defaultProps }

MaterialBurstModeOutlined.propTypes = { ...Icon.propTypes }

export default MaterialBurstModeOutlined