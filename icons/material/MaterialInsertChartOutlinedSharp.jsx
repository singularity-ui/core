import React from 'react'

import Icon from '../Icon'

const MaterialInsertChartOutlinedSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2 2H5V5h14v14zm2-16H3v18h18V3z" />
  </svg>
)

const MaterialInsertChartOutlinedSharp = props => <Icon as={MaterialInsertChartOutlinedSharpSvg} {...props} />

MaterialInsertChartOutlinedSharp.defaultProps = { ...Icon.defaultProps }

MaterialInsertChartOutlinedSharp.propTypes = { ...Icon.propTypes }

export default MaterialInsertChartOutlinedSharp
