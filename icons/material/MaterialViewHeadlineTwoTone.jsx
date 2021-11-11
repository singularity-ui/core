import React from 'react'

import Icon from '../Icon'

const MaterialViewHeadlineTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z" />
  </svg>
)

const MaterialViewHeadlineTwoTone = props => <Icon as={MaterialViewHeadlineTwoToneSvg} {...props} />

MaterialViewHeadlineTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialViewHeadlineTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialViewHeadlineTwoTone
