import React from 'react'

import Icon from '../Icon'

const MaterialStraightenSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M23 6H1v12h22V6zm-2 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z" />
  </svg>
)

const MaterialStraightenSharp = props => <Icon as={MaterialStraightenSharpSvg} {...props} />

MaterialStraightenSharp.defaultProps = { ...Icon.defaultProps }

MaterialStraightenSharp.propTypes = { ...Icon.propTypes }

export default MaterialStraightenSharp
