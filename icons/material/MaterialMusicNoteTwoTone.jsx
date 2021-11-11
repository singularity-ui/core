import React from 'react'

import Icon from '../Icon'

const MaterialMusicNoteTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <circle cx="10.01" cy="17" opacity=".3" r="2" />
    <path d="M12 3l.01 10.55c-.59-.34-1.27-.55-2-.55C7.79 13 6 14.79 6 17s1.79 4 4.01 4S14 19.21 14 17V7h4V3h-6zm-1.99 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
  </svg>
)

const MaterialMusicNoteTwoTone = props => <Icon as={MaterialMusicNoteTwoToneSvg} {...props} />

MaterialMusicNoteTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialMusicNoteTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialMusicNoteTwoTone