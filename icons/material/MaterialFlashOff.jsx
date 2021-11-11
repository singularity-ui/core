import React from 'react'

import Icon from '../Icon'

const MaterialFlashOffSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3.27 3L2 4.27l5 5V13h3v9l3.58-6.14L17.73 20 19 18.73 3.27 3zM17 10h-4l4-8H7v2.18l8.46 8.46L17 10z" />
  </svg>
)

const MaterialFlashOff = props => <Icon as={MaterialFlashOffSvg} {...props} />

MaterialFlashOff.defaultProps = { ...Icon.defaultProps }

MaterialFlashOff.propTypes = { ...Icon.propTypes }

export default MaterialFlashOff
