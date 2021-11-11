import React from 'react'

import Icon from '../Icon'

const MaterialDashboardSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
  </svg>
)

const MaterialDashboard = props => <Icon as={MaterialDashboardSvg} {...props} />

MaterialDashboard.defaultProps = { ...Icon.defaultProps }

MaterialDashboard.propTypes = { ...Icon.propTypes }

export default MaterialDashboard
