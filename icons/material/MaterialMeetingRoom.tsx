import React from 'react'

import Icon from '../Icon'

const MaterialMeetingRoomSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M14 6v15H3v-2h2V3h9v1h5v15h2v2h-4V6h-3zm-4 5v2h2v-2h-2z" />
  </svg>
)

const MaterialMeetingRoom = props => <Icon as={MaterialMeetingRoomSvg} {...props} />

MaterialMeetingRoom.defaultProps = { ...Icon.defaultProps }

MaterialMeetingRoom.propTypes = { ...Icon.propTypes }

export default MaterialMeetingRoom
