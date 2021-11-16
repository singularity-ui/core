import React from 'react'

import Icon from '../Icon'

const MaterialExposureNegOneSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4 11v2h8v-2H4zm15 7h-2V7.38L14 8.4V6.7L18.7 5h.3v13z" />
  </svg>
)

const MaterialExposureNegOneSharp = props => <Icon as={MaterialExposureNegOneSharpSvg} {...props} />

MaterialExposureNegOneSharp.defaultProps = { ...Icon.defaultProps }

MaterialExposureNegOneSharp.propTypes = { ...Icon.propTypes }

export default MaterialExposureNegOneSharp