import React from 'react'

import Icon from '../Icon'

const MaterialDehazeTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M2 16v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20V6H2z" />
  </svg>
)

const MaterialDehazeTwoTone = props => <Icon as={MaterialDehazeTwoToneSvg} {...props} />

MaterialDehazeTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialDehazeTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialDehazeTwoTone
