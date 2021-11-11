import React from 'react'

import Icon from '../Icon'

const MaterialCallMissedOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19.59 7L12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9L19.59 7z" />
  </svg>
)

const MaterialCallMissedOutlined = props => <Icon as={MaterialCallMissedOutlinedSvg} {...props} />

MaterialCallMissedOutlined.defaultProps = { ...Icon.defaultProps }

MaterialCallMissedOutlined.propTypes = { ...Icon.propTypes }

export default MaterialCallMissedOutlined
