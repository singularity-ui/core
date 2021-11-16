import React from 'react'

import Icon from '../Icon'

const MaterialFastForwardRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M5.58 16.89l5.77-4.07c.56-.4.56-1.24 0-1.63L5.58 7.11C4.91 6.65 4 7.12 4 7.93v8.14c0 .81.91 1.28 1.58.82zM13 7.93v8.14c0 .81.91 1.28 1.58.82l5.77-4.07c.56-.4.56-1.24 0-1.63l-5.77-4.07c-.67-.47-1.58 0-1.58.81z" />
  </svg>
)

const MaterialFastForwardRounded = props => <Icon as={MaterialFastForwardRoundedSvg} {...props} />

MaterialFastForwardRounded.defaultProps = { ...Icon.defaultProps }

MaterialFastForwardRounded.propTypes = { ...Icon.propTypes }

export default MaterialFastForwardRounded