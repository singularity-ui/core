import React from 'react'

import Icon from '../Icon'

const MaterialSortOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
  </svg>
)

const MaterialSortOutlined = props => <Icon as={MaterialSortOutlinedSvg} {...props} />

MaterialSortOutlined.defaultProps = { ...Icon.defaultProps }

MaterialSortOutlined.propTypes = { ...Icon.propTypes }

export default MaterialSortOutlined
