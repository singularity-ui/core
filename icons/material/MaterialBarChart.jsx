import React from 'react'

import Icon from '../Icon'

const MaterialBarChartSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" />
  </svg>
)

const MaterialBarChart = props => <Icon as={MaterialBarChartSvg} {...props} />

MaterialBarChart.defaultProps = { ...Icon.defaultProps }

MaterialBarChart.propTypes = { ...Icon.propTypes }

export default MaterialBarChart