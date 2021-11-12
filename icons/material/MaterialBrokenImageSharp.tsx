import React from 'react'

import Icon from '../Icon'

const MaterialBrokenImageSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3v8.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V3h18zm-3 8.42l3 3.01V21H3v-8.58l3 2.99 4-4 4 4 4-3.99z" />
  </svg>
)

const MaterialBrokenImageSharp = props => <Icon as={MaterialBrokenImageSharpSvg} {...props} />

MaterialBrokenImageSharp.defaultProps = { ...Icon.defaultProps }

MaterialBrokenImageSharp.propTypes = { ...Icon.propTypes }

export default MaterialBrokenImageSharp
