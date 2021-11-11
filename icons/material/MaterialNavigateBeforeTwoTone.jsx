import React from 'react'

import Icon from '../Icon'

const MaterialNavigateBeforeTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
  </svg>
)

const MaterialNavigateBeforeTwoTone = props => <Icon as={MaterialNavigateBeforeTwoToneSvg} {...props} />

MaterialNavigateBeforeTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialNavigateBeforeTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialNavigateBeforeTwoTone
