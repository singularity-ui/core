import React from 'react'

import Icon from '../Icon'

const MaterialKeyboardBackspaceTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z" />
  </svg>
)

const MaterialKeyboardBackspaceTwoTone = props => <Icon as={MaterialKeyboardBackspaceTwoToneSvg} {...props} />

MaterialKeyboardBackspaceTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialKeyboardBackspaceTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialKeyboardBackspaceTwoTone
