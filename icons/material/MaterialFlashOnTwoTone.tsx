import React from 'react'

import Icon from '../Icon'

const MaterialFlashOnTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17 10h-4l3-8H7v11h3v9z" />
  </svg>
)

const MaterialFlashOnTwoTone = props => <Icon as={MaterialFlashOnTwoToneSvg} {...props} />

MaterialFlashOnTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialFlashOnTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialFlashOnTwoTone
