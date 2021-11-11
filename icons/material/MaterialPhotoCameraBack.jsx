import React from 'react'

import Icon from '../Icon'

const MaterialPhotoCameraBackSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 5c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h3.17L9 3h6l1.83 2H20zm0 14V7H4v12h16zm-6-7l-3 3.72L9 13l-3 4h12l-4-5z" />
  </svg>
)

const MaterialPhotoCameraBack = props => <Icon as={MaterialPhotoCameraBackSvg} {...props} />

MaterialPhotoCameraBack.defaultProps = { ...Icon.defaultProps }

MaterialPhotoCameraBack.propTypes = { ...Icon.propTypes }

export default MaterialPhotoCameraBack
