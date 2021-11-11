import React from 'react'

import Icon from '../Icon'

const MaterialAirlineSeatIndividualSuiteSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7 13c1.65 0 3-1.35 3-3S8.65 7 7 7s-3 1.35-3 3 1.35 3 3 3zm16-6H11v7H3V7H1v10h22V7z" />
  </svg>
)

const MaterialAirlineSeatIndividualSuiteSharp = props => (
  <Icon as={MaterialAirlineSeatIndividualSuiteSharpSvg} {...props} />
)

MaterialAirlineSeatIndividualSuiteSharp.defaultProps = { ...Icon.defaultProps }

MaterialAirlineSeatIndividualSuiteSharp.propTypes = { ...Icon.propTypes }

export default MaterialAirlineSeatIndividualSuiteSharp
