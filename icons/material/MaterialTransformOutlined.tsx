import React from 'react'

import Icon from '../Icon'

const MaterialTransformOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 18v-2H8V4h2L7 1 4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3 3-3h-2v-2h4zM10 8h6v6h2V8c0-1.1-.9-2-2-2h-6v2z" />
  </svg>
)

const MaterialTransformOutlined = props => <Icon as={MaterialTransformOutlinedSvg} {...props} />

MaterialTransformOutlined.defaultProps = { ...Icon.defaultProps }

MaterialTransformOutlined.propTypes = { ...Icon.propTypes }

export default MaterialTransformOutlined