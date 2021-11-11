import React from 'react'

import Icon from '../Icon'

const MaterialBookOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z" />
  </svg>
)

const MaterialBookOutlined = props => <Icon as={MaterialBookOutlinedSvg} {...props} />

MaterialBookOutlined.defaultProps = { ...Icon.defaultProps }

MaterialBookOutlined.propTypes = { ...Icon.propTypes }

export default MaterialBookOutlined
