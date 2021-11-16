import React from 'react'

import Icon from '../Icon'

const MaterialBorderAllOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 3v18h18V3H3zm8 16H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z" />
  </svg>
)

const MaterialBorderAllOutlined = props => <Icon as={MaterialBorderAllOutlinedSvg} {...props} />

MaterialBorderAllOutlined.defaultProps = { ...Icon.defaultProps }

MaterialBorderAllOutlined.propTypes = { ...Icon.propTypes }

export default MaterialBorderAllOutlined