import React from 'react'

import Icon from '../Icon'

const MaterialVignetteSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 15c-4.42 0-8-2.69-8-6s3.58-6 8-6 8 2.69 8 6-3.58 6-8 6z" />
  </svg>
)

const MaterialVignette = props => <Icon as={MaterialVignetteSvg} {...props} />

MaterialVignette.defaultProps = { ...Icon.defaultProps }

MaterialVignette.propTypes = { ...Icon.propTypes }

export default MaterialVignette
