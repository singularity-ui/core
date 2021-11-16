import React from 'react'

import Icon from '../Icon'

const MaterialArrowRightRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M11.71 15.29l2.59-2.59c.39-.39.39-1.02 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71z" />
  </svg>
)

const MaterialArrowRightRounded = props => <Icon as={MaterialArrowRightRoundedSvg} {...props} />

MaterialArrowRightRounded.defaultProps = { ...Icon.defaultProps }

MaterialArrowRightRounded.propTypes = { ...Icon.propTypes }

export default MaterialArrowRightRounded