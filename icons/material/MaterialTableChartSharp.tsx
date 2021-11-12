import React from 'react'

import Icon from '../Icon'

const MaterialTableChartSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M10 10.02h5V21h-5V10.02zM17 21h5V10h-5v11zm5-18H3v5h19V3zM3 21h5V10H3v11z" />
  </svg>
)

const MaterialTableChartSharp = props => <Icon as={MaterialTableChartSharpSvg} {...props} />

MaterialTableChartSharp.defaultProps = { ...Icon.defaultProps }

MaterialTableChartSharp.propTypes = { ...Icon.propTypes }

export default MaterialTableChartSharp
