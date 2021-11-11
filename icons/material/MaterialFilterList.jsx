import React from 'react'

import Icon from '../Icon'

const MaterialFilterListSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
  </svg>
)

const MaterialFilterList = props => <Icon as={MaterialFilterListSvg} {...props} />

MaterialFilterList.defaultProps = { ...Icon.defaultProps }

MaterialFilterList.propTypes = { ...Icon.propTypes }

export default MaterialFilterList