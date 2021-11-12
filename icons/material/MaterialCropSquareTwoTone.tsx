import React from 'react'

import Icon from '../Icon'

const MaterialCropSquareTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12z" />
  </svg>
)

const MaterialCropSquareTwoTone = props => <Icon as={MaterialCropSquareTwoToneSvg} {...props} />

MaterialCropSquareTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialCropSquareTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialCropSquareTwoTone
