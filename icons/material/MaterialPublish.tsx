import React from 'react'

import Icon from '../Icon'

const MaterialPublishSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z" />
  </svg>
)

const MaterialPublish = props => <Icon as={MaterialPublishSvg} {...props} />

MaterialPublish.defaultProps = { ...Icon.defaultProps }

MaterialPublish.propTypes = { ...Icon.propTypes }

export default MaterialPublish
