import React from 'react'

import Icon from '../Icon'

const MaterialArrowRightAltSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
  </svg>
)

const MaterialArrowRightAlt = props => <Icon as={MaterialArrowRightAltSvg} {...props} />

MaterialArrowRightAlt.defaultProps = { ...Icon.defaultProps }

MaterialArrowRightAlt.propTypes = { ...Icon.propTypes }

export default MaterialArrowRightAlt
