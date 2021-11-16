import React from 'react'

import Icon from '../Icon'

const MaterialEventSeatTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M9 5h6v7H9z" opacity=".3" />
    <path d="M4 21h2v-4h12v4h2v-6H4zM17 5c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v9h10V5zm-2 7H9V5h6v7zm4-2h3v3h-3zM2 10h3v3H2z" />
  </svg>
)

const MaterialEventSeatTwoTone = props => <Icon as={MaterialEventSeatTwoToneSvg} {...props} />

MaterialEventSeatTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialEventSeatTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialEventSeatTwoTone