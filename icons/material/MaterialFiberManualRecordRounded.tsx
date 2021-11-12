import React from 'react'

import Icon from '../Icon'

const MaterialFiberManualRecordRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <circle cx="12" cy="12" r="8" />
  </svg>
)

const MaterialFiberManualRecordRounded = props => <Icon as={MaterialFiberManualRecordRoundedSvg} {...props} />

MaterialFiberManualRecordRounded.defaultProps = { ...Icon.defaultProps }

MaterialFiberManualRecordRounded.propTypes = { ...Icon.propTypes }

export default MaterialFiberManualRecordRounded
