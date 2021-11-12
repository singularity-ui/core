import React from 'react'

import Icon from '../Icon'

const MaterialAudiotrackTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <circle cx="10" cy="17" opacity=".3" r="2" />
    <path d="M10 21c2.21 0 4-1.79 4-4V7h4V3h-6v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
  </svg>
)

const MaterialAudiotrackTwoTone = props => <Icon as={MaterialAudiotrackTwoToneSvg} {...props} />

MaterialAudiotrackTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialAudiotrackTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialAudiotrackTwoTone
