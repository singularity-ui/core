import React from 'react'

import Icon from '../Icon'

const MaterialFlightTakeoffOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M2.5 19h19v2h-19v-2zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 2.59 4.49L21 11.49c.81-.23 1.28-1.05 1.07-1.85z" />
  </svg>
)

const MaterialFlightTakeoffOutlined = props => <Icon as={MaterialFlightTakeoffOutlinedSvg} {...props} />

MaterialFlightTakeoffOutlined.defaultProps = { ...Icon.defaultProps }

MaterialFlightTakeoffOutlined.propTypes = { ...Icon.propTypes }

export default MaterialFlightTakeoffOutlined