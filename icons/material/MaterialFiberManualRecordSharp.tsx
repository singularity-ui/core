import React from 'react'

import Icon from '../Icon'

const MaterialFiberManualRecordSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <circle cx="12" cy="12" r="8" />
  </svg>
)

const MaterialFiberManualRecordSharp = props => <Icon as={MaterialFiberManualRecordSharpSvg} {...props} />

MaterialFiberManualRecordSharp.defaultProps = { ...Icon.defaultProps }

MaterialFiberManualRecordSharp.propTypes = { ...Icon.propTypes }

export default MaterialFiberManualRecordSharp
