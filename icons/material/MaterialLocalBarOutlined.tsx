import React from 'react'

import Icon from '../Icon'

const MaterialLocalBarOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M14.77 9L12 12.11 9.23 9h5.54M21 3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9V3zM7.43 7L5.66 5h12.69l-1.78 2H7.43z" />
  </svg>
)

const MaterialLocalBarOutlined = props => <Icon as={MaterialLocalBarOutlinedSvg} {...props} />

MaterialLocalBarOutlined.defaultProps = { ...Icon.defaultProps }

MaterialLocalBarOutlined.propTypes = { ...Icon.propTypes }

export default MaterialLocalBarOutlined
