import React from 'react'

import Icon from '../Icon'

const MaterialViewAgendaSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 13H2v8h19v-8zm0-10H2v8h19V3z" />
  </svg>
)

const MaterialViewAgendaSharp = props => <Icon as={MaterialViewAgendaSharpSvg} {...props} />

MaterialViewAgendaSharp.defaultProps = { ...Icon.defaultProps }

MaterialViewAgendaSharp.propTypes = { ...Icon.propTypes }

export default MaterialViewAgendaSharp
