import React from 'react'

import Icon from '../Icon'

const MaterialPauseTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
  </svg>
)

const MaterialPauseTwoTone = props => <Icon as={MaterialPauseTwoToneSvg} {...props} />

MaterialPauseTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialPauseTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialPauseTwoTone
