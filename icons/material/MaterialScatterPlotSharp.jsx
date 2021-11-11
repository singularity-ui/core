import React from 'react'

import Icon from '../Icon'

const MaterialScatterPlotSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <circle cx="7" cy="14" r="3" />
    <circle cx="11" cy="6" r="3" />
    <circle cx="16.6" cy="17.6" r="3" />
  </svg>
)

const MaterialScatterPlotSharp = props => <Icon as={MaterialScatterPlotSharpSvg} {...props} />

MaterialScatterPlotSharp.defaultProps = { ...Icon.defaultProps }

MaterialScatterPlotSharp.propTypes = { ...Icon.propTypes }

export default MaterialScatterPlotSharp