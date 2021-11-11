import React from 'react'

import Icon from '../Icon'

const MaterialNearMeDisabledSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M12,6.34L21,3l-3.34,9L12,6.34z M22.61,19.78L4.22,1.39L2.81,2.81l5.07,5.07L3,9.69v1.41l7.07,2.83L12.9,21h1.41l1.81-4.88 l5.07,5.07L22.61,19.78z" />
  </svg>
)

const MaterialNearMeDisabled = props => <Icon as={MaterialNearMeDisabledSvg} {...props} />

MaterialNearMeDisabled.defaultProps = { ...Icon.defaultProps }

MaterialNearMeDisabled.propTypes = { ...Icon.propTypes }

export default MaterialNearMeDisabled
