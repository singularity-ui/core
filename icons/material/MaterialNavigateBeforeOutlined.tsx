import React from 'react'

import Icon from '../Icon'

const MaterialNavigateBeforeOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
  </svg>
)

const MaterialNavigateBeforeOutlined = props => <Icon as={MaterialNavigateBeforeOutlinedSvg} {...props} />

MaterialNavigateBeforeOutlined.defaultProps = { ...Icon.defaultProps }

MaterialNavigateBeforeOutlined.propTypes = { ...Icon.propTypes }

export default MaterialNavigateBeforeOutlined
