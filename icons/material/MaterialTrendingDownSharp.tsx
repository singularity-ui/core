import React from 'react'

import Icon from '../Icon'

const MaterialTrendingDownSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6h-6z" />
  </svg>
)

const MaterialTrendingDownSharp = props => <Icon as={MaterialTrendingDownSharpSvg} {...props} />

MaterialTrendingDownSharp.defaultProps = { ...Icon.defaultProps }

MaterialTrendingDownSharp.propTypes = { ...Icon.propTypes }

export default MaterialTrendingDownSharp
