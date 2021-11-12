import React from 'react'

import Icon from '../Icon'

const MaterialDashboardCustomizeSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm15 0h-2v3h-3v2h3v3h2v-3h3v-2h-3z" />
  </svg>
)

const MaterialDashboardCustomize = props => <Icon as={MaterialDashboardCustomizeSvg} {...props} />

MaterialDashboardCustomize.defaultProps = { ...Icon.defaultProps }

MaterialDashboardCustomize.propTypes = { ...Icon.propTypes }

export default MaterialDashboardCustomize
