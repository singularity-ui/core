import React from 'react'

import Icon from '../Icon'

const MaterialInsertInvitationSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H3.01v18H21V3h-3V1h-2zm3 18H5V8h14v11z" />
  </svg>
)

const MaterialInsertInvitationSharp = props => <Icon as={MaterialInsertInvitationSharpSvg} {...props} />

MaterialInsertInvitationSharp.defaultProps = { ...Icon.defaultProps }

MaterialInsertInvitationSharp.propTypes = { ...Icon.propTypes }

export default MaterialInsertInvitationSharp
