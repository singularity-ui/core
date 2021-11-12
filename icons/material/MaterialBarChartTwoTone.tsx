import React from 'react'

import Icon from '../Icon'

const MaterialBarChartTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5 9.2h3V19H5zM16.2 13H19v6h-2.8zm-5.6-8h2.8v14h-2.8z" />
  </svg>
)

const MaterialBarChartTwoTone = props => <Icon as={MaterialBarChartTwoToneSvg} {...props} />

MaterialBarChartTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialBarChartTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialBarChartTwoTone
