import React from 'react'

import Icon from '../Icon'

const MaterialRedoOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z" />
  </svg>
)

const MaterialRedoOutlined = props => <Icon as={MaterialRedoOutlinedSvg} {...props} />

MaterialRedoOutlined.defaultProps = { ...Icon.defaultProps }

MaterialRedoOutlined.propTypes = { ...Icon.propTypes }

export default MaterialRedoOutlined