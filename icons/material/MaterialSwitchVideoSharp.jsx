import React from 'react'

import Icon from '../Icon'

const MaterialSwitchVideoSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M18 9.5V5H2v14h16v-4.5l4 4v-13l-4 4zm-5 6V13H7v2.5L3.5 12 7 8.5V11h6V8.5l3.5 3.5-3.5 3.5z" />
  </svg>
)

const MaterialSwitchVideoSharp = props => <Icon as={MaterialSwitchVideoSharpSvg} {...props} />

MaterialSwitchVideoSharp.defaultProps = { ...Icon.defaultProps }

MaterialSwitchVideoSharp.propTypes = { ...Icon.propTypes }

export default MaterialSwitchVideoSharp