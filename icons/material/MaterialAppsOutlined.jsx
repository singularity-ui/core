import React from 'react'

import Icon from '../Icon'

const MaterialAppsOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
  </svg>
)

const MaterialAppsOutlined = props => <Icon as={MaterialAppsOutlinedSvg} {...props} />

MaterialAppsOutlined.defaultProps = { ...Icon.defaultProps }

MaterialAppsOutlined.propTypes = { ...Icon.propTypes }

export default MaterialAppsOutlined