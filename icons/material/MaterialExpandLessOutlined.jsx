import React from 'react'

import Icon from '../Icon'

const MaterialExpandLessOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" />
  </svg>
)

const MaterialExpandLessOutlined = props => <Icon as={MaterialExpandLessOutlinedSvg} {...props} />

MaterialExpandLessOutlined.defaultProps = { ...Icon.defaultProps }

MaterialExpandLessOutlined.propTypes = { ...Icon.propTypes }

export default MaterialExpandLessOutlined
