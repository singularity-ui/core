import React from 'react'

import Icon from '../Icon'

const MaterialVideogameAssetOffRoundedSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" y="0" />
    <path d="M20.7,17.87C21.46,17.59,22,16.85,22,16V8c0-1.1-0.9-2-2-2H8.83L20.7,17.87z M17.5,9c0.83,0,1.5,0.67,1.5,1.5 S18.33,12,17.5,12S16,11.33,16,10.5S16.67,9,17.5,9z M20.49,20.49L3.51,3.51c-0.39-0.39-1.02-0.39-1.41,0 c-0.39,0.39-0.39,1.02,0,1.41l1.2,1.2C2.54,6.41,2,7.15,2,8v8c0,1.1,0.9,2,2,2h11.17l3.9,3.9c0.39,0.39,1.02,0.39,1.41,0h0 C20.88,21.51,20.88,20.88,20.49,20.49z M10,13H9v1c0,0.55-0.45,1-1,1s-1-0.45-1-1v-1H6c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h1v-1 c0-0.05,0.01-0.11,0.01-0.16l3.14,3.14C10.11,12.99,10.05,13,10,13z" />
  </svg>
)

const MaterialVideogameAssetOffRounded = props => <Icon as={MaterialVideogameAssetOffRoundedSvg} {...props} />

MaterialVideogameAssetOffRounded.defaultProps = { ...Icon.defaultProps }

MaterialVideogameAssetOffRounded.propTypes = { ...Icon.propTypes }

export default MaterialVideogameAssetOffRounded