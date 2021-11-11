import React from 'react'

import Icon from '../Icon'

const MaterialArrowLeftOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M24 0v24H0V0h24z" fill="none" opacity=".87" />
    <path d="M14 7l-5 5 5 5V7z" />
  </svg>
)

const MaterialArrowLeftOutlined = props => <Icon as={MaterialArrowLeftOutlinedSvg} {...props} />

MaterialArrowLeftOutlined.defaultProps = { ...Icon.defaultProps }

MaterialArrowLeftOutlined.propTypes = { ...Icon.propTypes }

export default MaterialArrowLeftOutlined
