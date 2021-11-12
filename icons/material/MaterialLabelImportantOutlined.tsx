import React from 'react'

import Icon from '../Icon'

const MaterialLabelImportantOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4 18.99h11c.67 0 1.27-.32 1.63-.83L21 12l-4.37-6.16C16.27 5.33 15.67 5 15 5H4l5 7-5 6.99z" />
  </svg>
)

const MaterialLabelImportantOutlined = props => <Icon as={MaterialLabelImportantOutlinedSvg} {...props} />

MaterialLabelImportantOutlined.defaultProps = { ...Icon.defaultProps }

MaterialLabelImportantOutlined.propTypes = { ...Icon.propTypes }

export default MaterialLabelImportantOutlined
