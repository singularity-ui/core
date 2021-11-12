import React from 'react'

import Icon from '../Icon'

const MaterialDehazeSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z" />
  </svg>
)

const MaterialDehaze = props => <Icon as={MaterialDehazeSvg} {...props} />

MaterialDehaze.defaultProps = { ...Icon.defaultProps }

MaterialDehaze.propTypes = { ...Icon.propTypes }

export default MaterialDehaze
