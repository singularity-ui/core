import React from 'react'

import Icon from '../Icon'

const MaterialDoneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
  </svg>
)

const MaterialDone = props => <Icon as={MaterialDoneSvg} {...props} />

MaterialDone.defaultProps = { ...Icon.defaultProps }

MaterialDone.propTypes = { ...Icon.propTypes }

export default MaterialDone
