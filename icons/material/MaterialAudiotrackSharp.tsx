import React from 'react'

import Icon from '../Icon'

const MaterialAudiotrackSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
  </svg>
)

const MaterialAudiotrackSharp = props => <Icon as={MaterialAudiotrackSharpSvg} {...props} />

MaterialAudiotrackSharp.defaultProps = { ...Icon.defaultProps }

MaterialAudiotrackSharp.propTypes = { ...Icon.propTypes }

export default MaterialAudiotrackSharp
