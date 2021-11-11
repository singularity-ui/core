import React from 'react'

import Icon from '../Icon'

const MaterialArrowRightSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M10 17l5-5-5-5v10z" />
    <path d="M0 24V0h24v24H0z" fill="none" />
  </svg>
)

const MaterialArrowRight = props => <Icon as={MaterialArrowRightSvg} {...props} />

MaterialArrowRight.defaultProps = { ...Icon.defaultProps }

MaterialArrowRight.propTypes = { ...Icon.propTypes }

export default MaterialArrowRight
