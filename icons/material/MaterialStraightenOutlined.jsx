import React from 'react'

import Icon from '../Icon'

const MaterialStraightenOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z" />
  </svg>
)

const MaterialStraightenOutlined = props => <Icon as={MaterialStraightenOutlinedSvg} {...props} />

MaterialStraightenOutlined.defaultProps = { ...Icon.defaultProps }

MaterialStraightenOutlined.propTypes = { ...Icon.propTypes }

export default MaterialStraightenOutlined