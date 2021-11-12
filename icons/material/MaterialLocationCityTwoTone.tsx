import React from 'react'

import Icon from '../Icon'

const MaterialLocationCityTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z" />
  </svg>
)

const MaterialLocationCityTwoTone = props => <Icon as={MaterialLocationCityTwoToneSvg} {...props} />

MaterialLocationCityTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialLocationCityTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialLocationCityTwoTone
