import React from 'react'

import Icon from '../Icon'

const MaterialFiberManualRecordSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M24 24H0V0h24v24z" fill="none" />
    <circle cx="12" cy="12" r="8" />
  </svg>
)

const MaterialFiberManualRecord = props => <Icon as={MaterialFiberManualRecordSvg} {...props} />

MaterialFiberManualRecord.defaultProps = { ...Icon.defaultProps }

MaterialFiberManualRecord.propTypes = { ...Icon.propTypes }

export default MaterialFiberManualRecord
