import React from 'react'

import Icon from '../Icon'

const MaterialScatterPlotSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <g>
      <circle cx="7" cy="14" r="3" />
      <circle cx="11" cy="6" r="3" />
      <circle cx="16.6" cy="17.6" r="3" />
    </g>
  </svg>
)

const MaterialScatterPlot = props => <Icon as={MaterialScatterPlotSvg} {...props} />

MaterialScatterPlot.defaultProps = { ...Icon.defaultProps }

MaterialScatterPlot.propTypes = { ...Icon.propTypes }

export default MaterialScatterPlot
