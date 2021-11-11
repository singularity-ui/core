import React from 'react'

import Icon from '../Icon'

const MaterialCropSquareRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H7c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z" />
  </svg>
)

const MaterialCropSquareRounded = props => <Icon as={MaterialCropSquareRoundedSvg} {...props} />

MaterialCropSquareRounded.defaultProps = { ...Icon.defaultProps }

MaterialCropSquareRounded.propTypes = { ...Icon.propTypes }

export default MaterialCropSquareRounded