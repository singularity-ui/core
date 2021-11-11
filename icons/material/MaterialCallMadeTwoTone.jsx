import React from 'react'

import Icon from '../Icon'

const MaterialCallMadeTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5.41 20L17 8.41V15h2V5H9v2h6.59L4 18.59z" />
  </svg>
)

const MaterialCallMadeTwoTone = props => <Icon as={MaterialCallMadeTwoToneSvg} {...props} />

MaterialCallMadeTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialCallMadeTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialCallMadeTwoTone
