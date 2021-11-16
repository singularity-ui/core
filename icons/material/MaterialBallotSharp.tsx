import React from 'react'

import Icon from '../Icon'

const MaterialBallotSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M13 9.5h5v-2h-5v2zm0 7h5v-2h-5v2zm8 4.5H3V3h18v18zM6 11h5V6H6v5zm1-4h3v3H7V7zM6 18h5v-5H6v5zm1-4h3v3H7v-3z" />
  </svg>
)

const MaterialBallotSharp = props => <Icon as={MaterialBallotSharpSvg} {...props} />

MaterialBallotSharp.defaultProps = { ...Icon.defaultProps }

MaterialBallotSharp.propTypes = { ...Icon.propTypes }

export default MaterialBallotSharp