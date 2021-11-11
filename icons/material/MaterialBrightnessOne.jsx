import React from 'react'

import Icon from '../Icon'

const MaterialBrightnessOneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <circle cx="12" cy="12" r="10" />
  </svg>
)

const MaterialBrightnessOne = props => <Icon as={MaterialBrightnessOneSvg} {...props} />

MaterialBrightnessOne.defaultProps = { ...Icon.defaultProps }

MaterialBrightnessOne.propTypes = { ...Icon.propTypes }

export default MaterialBrightnessOne
