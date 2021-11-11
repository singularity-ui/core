import React from 'react'

import Icon from '../Icon'

const MaterialViewDaySvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z" />
  </svg>
)

const MaterialViewDay = props => <Icon as={MaterialViewDaySvg} {...props} />

MaterialViewDay.defaultProps = { ...Icon.defaultProps }

MaterialViewDay.propTypes = { ...Icon.propTypes }

export default MaterialViewDay
