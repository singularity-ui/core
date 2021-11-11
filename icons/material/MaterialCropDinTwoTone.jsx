import React from 'react'

import Icon from '../Icon'

const MaterialCropDinTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
  </svg>
)

const MaterialCropDinTwoTone = props => <Icon as={MaterialCropDinTwoToneSvg} {...props} />

MaterialCropDinTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialCropDinTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialCropDinTwoTone
