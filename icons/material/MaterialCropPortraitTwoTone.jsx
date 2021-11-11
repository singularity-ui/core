import React from 'react'

import Icon from '../Icon'

const MaterialCropPortraitTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7V5h10v14z" />
  </svg>
)

const MaterialCropPortraitTwoTone = props => <Icon as={MaterialCropPortraitTwoToneSvg} {...props} />

MaterialCropPortraitTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialCropPortraitTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialCropPortraitTwoTone