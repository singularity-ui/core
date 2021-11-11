import React from 'react'

import Icon from '../Icon'

const MaterialAddSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </svg>
)

const MaterialAdd = props => <Icon as={MaterialAddSvg} {...props} />

MaterialAdd.defaultProps = { ...Icon.defaultProps }

MaterialAdd.propTypes = { ...Icon.propTypes }

export default MaterialAdd
