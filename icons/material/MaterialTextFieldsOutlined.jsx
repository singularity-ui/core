import React from 'react'

import Icon from '../Icon'

const MaterialTextFieldsOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z" />
  </svg>
)

const MaterialTextFieldsOutlined = props => <Icon as={MaterialTextFieldsOutlinedSvg} {...props} />

MaterialTextFieldsOutlined.defaultProps = { ...Icon.defaultProps }

MaterialTextFieldsOutlined.propTypes = { ...Icon.propTypes }

export default MaterialTextFieldsOutlined
