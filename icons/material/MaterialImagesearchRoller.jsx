import React from 'react'

import Icon from '../Icon'

const MaterialImagesearchRollerSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 2v6H6V6H4v4h10v5h2v8h-6v-8h2v-3H2V4h4V2" />
  </svg>
)

const MaterialImagesearchRoller = props => <Icon as={MaterialImagesearchRollerSvg} {...props} />

MaterialImagesearchRoller.defaultProps = { ...Icon.defaultProps }

MaterialImagesearchRoller.propTypes = { ...Icon.propTypes }

export default MaterialImagesearchRoller