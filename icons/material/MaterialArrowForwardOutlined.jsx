import React from 'react'

import Icon from '../Icon'

const MaterialArrowForwardOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
  </svg>
)

const MaterialArrowForwardOutlined = props => <Icon as={MaterialArrowForwardOutlinedSvg} {...props} />

MaterialArrowForwardOutlined.defaultProps = { ...Icon.defaultProps }

MaterialArrowForwardOutlined.propTypes = { ...Icon.propTypes }

export default MaterialArrowForwardOutlined
