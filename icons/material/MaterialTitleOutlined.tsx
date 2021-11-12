import React from 'react'

import Icon from '../Icon'

const MaterialTitleOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5 4v3h5.5v12h3V7H19V4H5z" />
  </svg>
)

const MaterialTitleOutlined = props => <Icon as={MaterialTitleOutlinedSvg} {...props} />

MaterialTitleOutlined.defaultProps = { ...Icon.defaultProps }

MaterialTitleOutlined.propTypes = { ...Icon.propTypes }

export default MaterialTitleOutlined
