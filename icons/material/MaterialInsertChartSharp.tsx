import React from 'react'

import Icon from '../Icon'

const MaterialInsertChartSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M21 3H3v18h18V3zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
  </svg>
)

const MaterialInsertChartSharp = props => <Icon as={MaterialInsertChartSharpSvg} {...props} />

MaterialInsertChartSharp.defaultProps = { ...Icon.defaultProps }

MaterialInsertChartSharp.propTypes = { ...Icon.propTypes }

export default MaterialInsertChartSharp
