import React from 'react'

import Icon from '../Icon'

const MaterialNoteRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M21.41 9.41l-4.83-4.83c-.37-.37-.88-.58-1.41-.58H4c-1.1 0-2 .9-2 2v12.01c0 1.1.89 1.99 1.99 1.99H20c1.1 0 2-.9 2-2v-7.17c0-.53-.21-1.04-.59-1.42zM15 5.5l5.5 5.5H16c-.55 0-1-.45-1-1V5.5z" />
  </svg>
)

const MaterialNoteRounded = props => <Icon as={MaterialNoteRoundedSvg} {...props} />

MaterialNoteRounded.defaultProps = { ...Icon.defaultProps }

MaterialNoteRounded.propTypes = { ...Icon.propTypes }

export default MaterialNoteRounded