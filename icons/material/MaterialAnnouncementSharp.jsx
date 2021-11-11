import React from 'react'

import Icon from '../Icon'

const MaterialAnnouncementSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 2H2v20l4-4h16V2zm-9 9h-2V5h2v6zm0 4h-2v-2h2v2z" />
  </svg>
)

const MaterialAnnouncementSharp = props => <Icon as={MaterialAnnouncementSharpSvg} {...props} />

MaterialAnnouncementSharp.defaultProps = { ...Icon.defaultProps }

MaterialAnnouncementSharp.propTypes = { ...Icon.propTypes }

export default MaterialAnnouncementSharp
