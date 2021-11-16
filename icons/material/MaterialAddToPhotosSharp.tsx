import React from 'react'

import Icon from '../Icon'

const MaterialAddToPhotosSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4 6H2v16h16v-2H4V6zm18-4H6v16h16V2zm-3 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z" />
  </svg>
)

const MaterialAddToPhotosSharp = props => <Icon as={MaterialAddToPhotosSharpSvg} {...props} />

MaterialAddToPhotosSharp.defaultProps = { ...Icon.defaultProps }

MaterialAddToPhotosSharp.propTypes = { ...Icon.propTypes }

export default MaterialAddToPhotosSharp