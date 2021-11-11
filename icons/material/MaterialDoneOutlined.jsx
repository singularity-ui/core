import React from 'react'

import Icon from '../Icon'

const MaterialDoneOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
  </svg>
)

const MaterialDoneOutlined = props => <Icon as={MaterialDoneOutlinedSvg} {...props} />

MaterialDoneOutlined.defaultProps = { ...Icon.defaultProps }

MaterialDoneOutlined.propTypes = { ...Icon.propTypes }

export default MaterialDoneOutlined
