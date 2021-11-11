import React from 'react'

import Icon from '../Icon'

const MaterialRoomServiceSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M2 17h20v2H2zm11.84-9.21c.1-.24.16-.51.16-.79 0-1.1-.9-2-2-2s-2 .9-2 2c0 .28.06.55.16.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21z" />
  </svg>
)

const MaterialRoomService = props => <Icon as={MaterialRoomServiceSvg} {...props} />

MaterialRoomService.defaultProps = { ...Icon.defaultProps }

MaterialRoomService.propTypes = { ...Icon.propTypes }

export default MaterialRoomService