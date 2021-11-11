import React from 'react'

import Icon from '../Icon'

const MaterialSubjectSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z" />
  </svg>
)

const MaterialSubject = props => <Icon as={MaterialSubjectSvg} {...props} />

MaterialSubject.defaultProps = { ...Icon.defaultProps }

MaterialSubject.propTypes = { ...Icon.propTypes }

export default MaterialSubject
