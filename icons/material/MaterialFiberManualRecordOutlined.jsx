import React from 'react'

import Icon from '../Icon'

const MaterialFiberManualRecordOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0-2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" />
  </svg>
)

const MaterialFiberManualRecordOutlined = props => <Icon as={MaterialFiberManualRecordOutlinedSvg} {...props} />

MaterialFiberManualRecordOutlined.defaultProps = { ...Icon.defaultProps }

MaterialFiberManualRecordOutlined.propTypes = { ...Icon.propTypes }

export default MaterialFiberManualRecordOutlined