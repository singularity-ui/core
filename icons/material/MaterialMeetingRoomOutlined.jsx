import React from 'react'

import Icon from '../Icon'

const MaterialMeetingRoomOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 19V4h-4V3H5v16H3v2h12V6h2v15h4v-2h-2zm-6 0H7V5h6v14zm-3-8h2v2h-2z" />
  </svg>
)

const MaterialMeetingRoomOutlined = props => <Icon as={MaterialMeetingRoomOutlinedSvg} {...props} />

MaterialMeetingRoomOutlined.defaultProps = { ...Icon.defaultProps }

MaterialMeetingRoomOutlined.propTypes = { ...Icon.propTypes }

export default MaterialMeetingRoomOutlined