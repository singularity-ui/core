import React from 'react'

import Icon from '../Icon'

const MaterialVerticalDistributeTwoToneSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M22,2v2H2V2H22z M7,10.5v3h10v-3H7z M2,20v2h20v-2H2z" />
  </svg>
)

const MaterialVerticalDistributeTwoTone = props => <Icon as={MaterialVerticalDistributeTwoToneSvg} {...props} />

MaterialVerticalDistributeTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialVerticalDistributeTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialVerticalDistributeTwoTone