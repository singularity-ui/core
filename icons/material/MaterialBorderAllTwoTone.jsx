import React from 'react'

import Icon from '../Icon'

const MaterialBorderAllTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3H3v18h18V3zM11 19H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z" />
  </svg>
)

const MaterialBorderAllTwoTone = props => <Icon as={MaterialBorderAllTwoToneSvg} {...props} />

MaterialBorderAllTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialBorderAllTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialBorderAllTwoTone
