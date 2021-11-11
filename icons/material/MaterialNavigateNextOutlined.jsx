import React from 'react'

import Icon from '../Icon'

const MaterialNavigateNextOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
  </svg>
)

const MaterialNavigateNextOutlined = props => <Icon as={MaterialNavigateNextOutlinedSvg} {...props} />

MaterialNavigateNextOutlined.defaultProps = { ...Icon.defaultProps }

MaterialNavigateNextOutlined.propTypes = { ...Icon.propTypes }

export default MaterialNavigateNextOutlined
