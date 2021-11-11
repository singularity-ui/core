import React from 'react'

import Icon from '../Icon'

const MaterialMarkunreadMailboxSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M22 6H10v6H8V4h6V0H6v6H2v16h20V6z" />
  </svg>
)

const MaterialMarkunreadMailboxSharp = props => <Icon as={MaterialMarkunreadMailboxSharpSvg} {...props} />

MaterialMarkunreadMailboxSharp.defaultProps = { ...Icon.defaultProps }

MaterialMarkunreadMailboxSharp.propTypes = { ...Icon.propTypes }

export default MaterialMarkunreadMailboxSharp
