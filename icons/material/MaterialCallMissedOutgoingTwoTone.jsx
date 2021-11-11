import React from 'react'

import Icon from '../Icon'

const MaterialCallMissedOutgoingTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 10.41V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41l9 9z" />
  </svg>
)

const MaterialCallMissedOutgoingTwoTone = props => <Icon as={MaterialCallMissedOutgoingTwoToneSvg} {...props} />

MaterialCallMissedOutgoingTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialCallMissedOutgoingTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialCallMissedOutgoingTwoTone
