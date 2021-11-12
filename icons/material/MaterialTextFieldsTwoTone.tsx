import React from 'react'

import Icon from '../Icon'

const MaterialTextFieldsTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12.5 12h3v7h3v-7h3V9h-9zm3-8h-13v3h5v12h3V7h5z" />
  </svg>
)

const MaterialTextFieldsTwoTone = props => <Icon as={MaterialTextFieldsTwoToneSvg} {...props} />

MaterialTextFieldsTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialTextFieldsTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialTextFieldsTwoTone
