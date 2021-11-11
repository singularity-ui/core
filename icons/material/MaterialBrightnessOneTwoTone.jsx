import React from 'react'

import Icon from '../Icon'

const MaterialBrightnessOneTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 20c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8z" opacity=".3" />
    <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm0-18c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8z" />
  </svg>
)

const MaterialBrightnessOneTwoTone = props => <Icon as={MaterialBrightnessOneTwoToneSvg} {...props} />

MaterialBrightnessOneTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialBrightnessOneTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialBrightnessOneTwoTone