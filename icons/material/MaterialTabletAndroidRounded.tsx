import React from 'react'

import Icon from '../Icon'

const MaterialTabletAndroidRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4.5 22h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5zm5.75-3H4.75V3h14.5v16z" />
  </svg>
)

const MaterialTabletAndroidRounded = props => <Icon as={MaterialTabletAndroidRoundedSvg} {...props} />

MaterialTabletAndroidRounded.defaultProps = { ...Icon.defaultProps }

MaterialTabletAndroidRounded.propTypes = { ...Icon.propTypes }

export default MaterialTabletAndroidRounded