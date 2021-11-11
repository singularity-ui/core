import React from 'react'

import Icon from '../Icon'

const MaterialPanToolSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M23 4v20H10.02L1 14.83 2.9 13 8 15.91V3h3v8h1V0h3v11h1V1h3v10h1V4h3z" />
  </svg>
)

const MaterialPanToolSharp = props => <Icon as={MaterialPanToolSharpSvg} {...props} />

MaterialPanToolSharp.defaultProps = { ...Icon.defaultProps }

MaterialPanToolSharp.propTypes = { ...Icon.propTypes }

export default MaterialPanToolSharp