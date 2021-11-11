import React from 'react'

import Icon from '../Icon'

const MaterialArrowRightTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 17l5-5-5-5v10z" />
  </svg>
)

const MaterialArrowRightTwoTone = props => <Icon as={MaterialArrowRightTwoToneSvg} {...props} />

MaterialArrowRightTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialArrowRightTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialArrowRightTwoTone
