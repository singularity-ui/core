import React from 'react'

import Icon from '../Icon'

const MaterialBarChartSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z" />
  </svg>
)

const MaterialBarChartSharp = props => <Icon as={MaterialBarChartSharpSvg} {...props} />

MaterialBarChartSharp.defaultProps = { ...Icon.defaultProps }

MaterialBarChartSharp.propTypes = { ...Icon.propTypes }

export default MaterialBarChartSharp
