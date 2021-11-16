import React from 'react'

import Icon from '../Icon'

const MaterialKeyboardTabTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M11.59 7.41L15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6-1.41 1.41zM20 6v12h2V6h-2z" />
  </svg>
)

const MaterialKeyboardTabTwoTone = props => <Icon as={MaterialKeyboardTabTwoToneSvg} {...props} />

MaterialKeyboardTabTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialKeyboardTabTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialKeyboardTabTwoTone