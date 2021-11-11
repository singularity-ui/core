import React from 'react'

import Icon from '../Icon'

const MaterialPauseCircleOutlineTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M13 8h2v8h-2zM9 8h2v8H9zm3 14c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm0-18c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8z" />
  </svg>
)

const MaterialPauseCircleOutlineTwoTone = props => <Icon as={MaterialPauseCircleOutlineTwoToneSvg} {...props} />

MaterialPauseCircleOutlineTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialPauseCircleOutlineTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialPauseCircleOutlineTwoTone