import React from 'react'

import Icon from '../Icon'

const MaterialViewAgendaSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z" />
  </svg>
)

const MaterialViewAgenda = props => <Icon as={MaterialViewAgendaSvg} {...props} />

MaterialViewAgenda.defaultProps = { ...Icon.defaultProps }

MaterialViewAgenda.propTypes = { ...Icon.propTypes }

export default MaterialViewAgenda