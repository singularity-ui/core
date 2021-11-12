import React from 'react'

import Icon from '../Icon'

const MaterialSendOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z" />
  </svg>
)

const MaterialSendOutlined = props => <Icon as={MaterialSendOutlinedSvg} {...props} />

MaterialSendOutlined.defaultProps = { ...Icon.defaultProps }

MaterialSendOutlined.propTypes = { ...Icon.propTypes }

export default MaterialSendOutlined
