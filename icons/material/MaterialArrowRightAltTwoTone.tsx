import React from 'react'

import Icon from '../Icon'

const MaterialArrowRightAltTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
  </svg>
)

const MaterialArrowRightAltTwoTone = props => <Icon as={MaterialArrowRightAltTwoToneSvg} {...props} />

MaterialArrowRightAltTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialArrowRightAltTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialArrowRightAltTwoTone
