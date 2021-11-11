import React from 'react'

import Icon from '../Icon'

const MaterialExposureNegOneRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4 12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1zm15 6h-2V7.38L14 8.4V6.7L18.7 5h.3v13z" />
  </svg>
)

const MaterialExposureNegOneRounded = props => <Icon as={MaterialExposureNegOneRoundedSvg} {...props} />

MaterialExposureNegOneRounded.defaultProps = { ...Icon.defaultProps }

MaterialExposureNegOneRounded.propTypes = { ...Icon.propTypes }

export default MaterialExposureNegOneRounded