import React from 'react'

import Icon from '../Icon'

const MaterialCallToActionOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 15h14v3H5z" />
  </svg>
)

const MaterialCallToActionOutlined = props => <Icon as={MaterialCallToActionOutlinedSvg} {...props} />

MaterialCallToActionOutlined.defaultProps = { ...Icon.defaultProps }

MaterialCallToActionOutlined.propTypes = { ...Icon.propTypes }

export default MaterialCallToActionOutlined
