import React from 'react'

import Icon from '../Icon'

const MaterialPhonelinkOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z" />
  </svg>
)

const MaterialPhonelinkOutlined = props => <Icon as={MaterialPhonelinkOutlinedSvg} {...props} />

MaterialPhonelinkOutlined.defaultProps = { ...Icon.defaultProps }

MaterialPhonelinkOutlined.propTypes = { ...Icon.propTypes }

export default MaterialPhonelinkOutlined
