import React from 'react'

import Icon from '../Icon'

const MaterialPriorityHighTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <circle cx="12" cy="19" r="2" />
    <path d="M10 3h4v12h-4z" />
  </svg>
)

const MaterialPriorityHighTwoTone = props => <Icon as={MaterialPriorityHighTwoToneSvg} {...props} />

MaterialPriorityHighTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialPriorityHighTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialPriorityHighTwoTone
