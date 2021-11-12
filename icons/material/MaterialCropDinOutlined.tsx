import React from 'react'

import Icon from '../Icon'

const MaterialCropDinOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
  </svg>
)

const MaterialCropDinOutlined = props => <Icon as={MaterialCropDinOutlinedSvg} {...props} />

MaterialCropDinOutlined.defaultProps = { ...Icon.defaultProps }

MaterialCropDinOutlined.propTypes = { ...Icon.propTypes }

export default MaterialCropDinOutlined
